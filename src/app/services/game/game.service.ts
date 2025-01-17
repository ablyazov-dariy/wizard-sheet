import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PlayersService } from '../players/players.service';
import { GameFormService } from '../game-form/game-form.service';
import { map, Observable, startWith } from 'rxjs';
import { GamePtsCalculatorService } from '@services/game-pts-calculator/game-pts-calculator.service';
import { GameForm } from '@interfaces/game-form.type';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameFormArray: GameForm = new FormArray<FormArray>([]);

  private _results$?: Observable<number[]>;

  constructor(
    private playersService: PlayersService,
    private gameFormService: GameFormService,
    private ptsCalculatorService: GamePtsCalculatorService,
  ) {
    this.gameFormArray.valueChanges
      .pipe(map(data => this.ptsCalculatorService.calculate(data)))
      .subscribe(console.log);
  }

  get nameControls() {
    return this.playersService.controls;
  }
  get roundsControls() {
    return this.gameFormArray?.controls;
  }

  get results$() {
    if (!this._results$) {
      this._results$ = this.gameFormArray.valueChanges.pipe(
        map(data => this.ptsCalculatorService.calculate(data)),
        startWith([]),
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
    this.gameFormService.initForm(
      this.gameFormArray,
      this.playersService.controls.length,
    );
  }
}
