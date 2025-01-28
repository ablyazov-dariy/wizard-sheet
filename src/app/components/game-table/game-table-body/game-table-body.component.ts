import { Component, inject, input } from '@angular/core';
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
import { PreventInvalidInputDirective } from '@app/directives/prevent-invalid-input/prevent-invalid-input.directive';
import { PlayersService } from '@services/players/players.service';

@Component({
  selector: 'app-game-table-body',
  imports: [
    FormsModule,
    GameStarterComponent,
    ReactiveFormsModule,
    NgClass,
    PreventInvalidInputDirective,
  ],
  templateUrl: './game-table-body.component.html',
  styleUrl: './game-table-body.component.scss',
})
export class GameTableBodyComponent {
  roundsControls = input<FormArray<FormGroup<FormControls<Trick>>>[]>();

  private playersService = inject(PlayersService);

  getTabIndex(row: number, column: number, isTricksWon: boolean): number {
    const players = this.playersService.form.length;

    const offset = isTricksWon ? column + 1 + players : column + 1;

    return (
      row * (players * 2) +
      offset +
      this.rowModOffset(row + 1, column + 1, players)
    );
  }

  private rowModOffset(r: number, c: number, players: number): number {
    const rowMod = r % players;

    if (rowMod === 1) {
      return 0;
    } else if (rowMod === 0) {
      if (c === players) {
        return 1 - players;
      } else {
        return 1;
      }
    } else {
      if (c < rowMod) {
        return 1 + players - rowMod;
      } else {
        return 1 - rowMod;
      }
    }
  }
}
