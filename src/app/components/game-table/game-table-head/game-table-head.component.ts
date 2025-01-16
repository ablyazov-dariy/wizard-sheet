import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-game-table-head',
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './game-table-head.component.html',
  styleUrl: './game-table-head.component.scss',
})
export class GameTableHeadComponent {
  public nameControls = input.required<FormControl<string | null>[]>();
}
