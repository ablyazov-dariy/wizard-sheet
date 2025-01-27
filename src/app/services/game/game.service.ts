import { Injectable, signal } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PlayersService } from '@services/players/players.service';
import { GameFormService } from '@services/game-form/game-form.service';
import { combineLatestWith, filter, map, Observable } from 'rxjs';
import { GamePtsCalculatorService } from '@services/game-pts-calculator/game-pts-calculator.service';
import { GameForm } from '@interfaces/game-form.type';
import { GameConfigService } from '@services/game-config/game-config.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameFormArray: GameForm = new FormArray<FormArray>([]);
  public showPlayersAlert = signal(0);

  private _results$?: Observable<number[]>;

  constructor(
    private playersService: PlayersService,
    private gameFormService: GameFormService,
    private ptsCalculatorService: GamePtsCalculatorService,
    private gameConfigService: GameConfigService,
  ) {}

  get nameControls() {
    return this.playersService.controls;
  }
  get roundsControls() {
    return this.gameFormArray?.controls;
  }

  get results$() {
    if (!this._results$) {
      this._results$ = this.gameFormArray.valueChanges.pipe(
        filter(() => this.gameFormArray.valid),
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

  public startGame() {
    if (!this.playersService.isValid()) {
      this.showPlayersAlert.set(Math.random());
      return;
    }
    this.showPlayersAlert.set(0);
    this.playersService.disable();
    this.gameFormService.initForm(
      this.gameFormArray,
      this.playersService.controls.length,
    );
  }

  public endGame() {
    this.playersService.enable();
    this.gameFormArray.clear();
  }
}
