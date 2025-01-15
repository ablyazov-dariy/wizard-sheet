import { Component, OnInit } from '@angular/core';
import { ContenteditableValueAccessorModule } from '@tinkoff/angular-contenteditable-accessor';
import { NgOptimizedImage } from '@angular/common';
import { PlayersService } from '../../services/players/players.service';
import { ReactiveFormsModule } from '@angular/forms';

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
  constructor(public playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.controls()[0].valueChanges.subscribe(console.log);
  }
}
