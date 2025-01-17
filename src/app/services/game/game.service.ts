import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PlayersService } from '../players/players.service';
import { GameFormService } from '../game-form/game-form.service';
import { map } from 'rxjs';
import { GamePtsCalculatorService } from '@services/game-pts-calculator/game-pts-calculator.service';
import { GameForm } from '@interfaces/game-form.type';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameFormArray: GameForm = new FormArray<FormArray>([]);

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
