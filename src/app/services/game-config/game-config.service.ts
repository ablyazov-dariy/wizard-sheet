import { Injectable, signal } from '@angular/core';
import { GameConfig } from '@interfaces/game-config.interface';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameConfigService {
  public config = signal<GameConfig>({
    baseScore: 20,
    trickValue: 10,
    bidPenalty: 10,
    constantPenalty: 0,
  });

  constructor(private ls: LocalStorageService) {
    const storedConfig = this.ls.getItem<GameConfig>('GAME_CONFIG');

    if (this.handleStorageErrors(storedConfig) && storedConfig) {
      this.config.set(storedConfig);
    }
  }

  private handleStorageErrors(stored: unknown): stored is GameConfig | null {
    if (!(stored instanceof Error)) return true;

    throw stored as Error;
  }
}
