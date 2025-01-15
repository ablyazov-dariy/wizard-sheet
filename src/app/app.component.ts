import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { GameFormComponent } from './components/game-form/game-form.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, GameFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wizz-sheet';
}
