import { Component, OnInit } from '@angular/core';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PlayersService } from '../../services/players/players.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { GameFormService } from '../../services/game-form/game-form.service';
import { GameTableFootComponent } from '../game-table-foot/game-table-foot.component';

@Component({
  selector: 'app-game-form',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    CommonModule,
    GameTableFootComponent,
  ],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss',
})
export class GameFormComponent implements OnInit {
  mainForm?: FormArray<
    FormArray<
      FormGroup<{
        tricksBid: FormControl;
        tricksWon: FormControl;
      }>
    >
  >;
  constructor(
    public playersService: PlayersService,
    private gameFormService: GameFormService,
  ) {}

  ngOnInit() {
    this.playersService.controls()[0].valueChanges.subscribe(console.log);
  }

  startGame() {
    this.mainForm = this.gameFormService.initForm(
      this.playersService.controls().length,
    );

    this.mainForm.valueChanges.subscribe(console.log);
  }
}
