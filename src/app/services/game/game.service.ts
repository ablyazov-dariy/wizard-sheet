import { Injectable, signal } from '@angular/core';
import { FormArray } from '@angular/forms';

import { PlayersService } from '@services/players/players.service';
import { GameFormService } from '@services/game-form/game-form.service';
import { GamePtsCalculatorService } from '@services/game-pts-calculator/game-pts-calculator.service';
import { GameForm } from '@interfaces/game-form.type';
import { GameConfigService } from '@services/game-config/game-config.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { Trick } from '@interfaces/trick.interface';

import {
  combineLatestWith,
  filter,
  map,
  Observable,
  startWith,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public form: GameForm = new FormArray<FormArray>([]);

  public showPlayersAlert = signal(0);

  private readonly accessKey = 'CURRENT_GAME';

  private _results$?: Observable<number[]>;

  constructor(
    private playersService: PlayersService,
    private gameFormService: GameFormService,
    private ptsCalculatorService: GamePtsCalculatorService,
    private gameConfigService: GameConfigService,
    private ls: LocalStorageService,
  ) {
    this.patchStoredValue();
  }

  get nameControls() {
    return this.playersService.form.controls;
  }
  get roundsControls() {
    return this.form?.controls;
  }

  get results$() {
    if (!this._results$) {
      this._results$ = this.form.valueChanges.pipe(
        filter(() => this.form.valid),
        tap(value => {
          this.ls.setItem(this.accessKey, value);
        }),
        startWith(this.form.value),
        combineLatestWith(this.gameConfigService.config$),
        map(([data, config]) =>
          this.ptsCalculatorService.calculate(data, config),
        ),
      );
    }
    return this._results$;
  }

  public addPlayer() {
    this.playersService.addPlayer();
  }

  public removePlayer() {
    this.playersService.removePlayer();
  }

  public startGame(patchValue?: Trick[][]) {
    if (!this.playersService.isValid()) {
      this.showPlayersAlert.set(Math.random());
      return;
    }
    this.showPlayersAlert.set(0);
    this.playersService.disable();
    this.playersService.saveNames();
    this.gameFormService.initForm(
      this.form,
      this.nameControls.length,
      patchValue,
    );
  }

  public endGame() {
    this.playersService.enable();
    this.playersService.reset();
    this.form.clear();
    this.ls.removeItem(this.accessKey);
  }

  private patchStoredValue() {
    const storedGame = this.ls.getItem<Trick[][]>(this.accessKey);

    if (this.ls.handleStorageErrors<Trick[][]>(storedGame) && storedGame) {
      this.startGame(storedGame);
    }
  }
}
