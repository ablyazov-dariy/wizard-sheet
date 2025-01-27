import { Component, input } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { GameStarterComponent } from './game-starter/game-starter.component';
import { FormControls } from '@interfaces/util/form-controls.type';
import { Trick } from '@interfaces/trick.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-game-table-body',
  imports: [FormsModule, GameStarterComponent, ReactiveFormsModule, NgClass],
  templateUrl: './game-table-body.component.html',
  styleUrl: './game-table-body.component.scss',
})
export class GameTableBodyComponent {
  roundsControls = input<FormArray<FormGroup<FormControls<Trick>>>[]>();

  tricksBidTabIndex(row: number): number {
    if (row % 2 !== 0) {
      return row * 2 + 2;
    } else {
      return row * 2 + 1;
    }
  }

  tricksWonTabIndex(row: number): number {
    if (row % 2 !== 0) {
      return row * 2 + 3;
    } else {
      return row * 2 + 2;
    }
  }
}
