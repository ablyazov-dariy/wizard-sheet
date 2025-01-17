import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { PlayersService } from '../players/players.service';
import { GameFormService } from '../game-form/game-form.service';
import { FormControls } from '@interfaces/util/form-controls.type';
import { Trick } from '@interfaces/trick.interface';
import { map } from 'rxjs';
import { GamePtsCalculatorService } from '@services/game-pts-calculator/game-pts-calculator.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // TODO: Extract type
  public gameFormArray?: FormArray<FormArray<FormGroup<FormControls<Trick>>>>;

  constructor(
    private playersService: PlayersService,
    private gameFormService: GameFormService,
    private ptsCalculatorService: GamePtsCalculatorService,
  ) {}

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
    this.gameFormArray = this.gameFormService.initForm(
      this.playersService.controls.length,
    );

    this.gameFormArray.valueChanges
      .pipe(map(data => this.ptsCalculatorService.calculate(data)))
      .subscribe(console.log);
  }
}
