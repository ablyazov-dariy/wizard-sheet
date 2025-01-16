import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { PlayersService } from '../players/players.service';
import { GameFormService } from '../game-form/game-form.service';
import { FormControls } from '../../interfaces/util/form-controls.type';
import { Trick } from '../../interfaces/trick.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public gameFormArray: FormArray<
    FormArray<FormGroup<FormControls<Trick>>>
  > | null = null;

  constructor(
    private playersService: PlayersService,
    private gameFormService: GameFormService,
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

  public removePlayer(index?: number) {
    this.playersService.removePlayer();
  }

  startGame() {
    this.gameFormArray = this.gameFormService.initForm(
      this.playersService.controls.length,
    );

    this.gameFormArray.valueChanges.subscribe(console.log);
  }
}
