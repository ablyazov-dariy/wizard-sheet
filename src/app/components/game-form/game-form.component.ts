import { Component, OnInit } from '@angular/core';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { NgOptimizedImage } from '@angular/common';
import { PlayersService } from '../../services/players/players.service';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MainFormService } from '../../services/main-form/main-form.service';

@Component({
  selector: 'app-game-form',
  imports: [
    ContenteditableValueAccessorModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  templateUrl: './game-form.component.html',
  styleUrl: './game-form.component.scss',
})
export class GameFormComponent implements OnInit {
  mainForm?: FormArray<
    FormArray<
      FormGroup<{
        wish: FormControl;
        actual: FormControl;
      }>
    >
  >;
  constructor(
    public playersService: PlayersService,
    private mainFormService: MainFormService,
  ) {}

  ngOnInit() {
    this.playersService.controls()[0].valueChanges.subscribe(console.log);
  }

  protected readonly Array = Array;

  startGame() {
    this.mainForm = this.mainFormService.getForm(
      this.playersService.controls().length,
    );
  }
}
