import { inject, Injectable } from '@angular/core';
import { Trick } from '@interfaces/trick.interface';
import { GameConfigService } from '@services/game-config/game-config.service';

@Injectable({
  providedIn: 'root',
})
export class GamePtsCalculatorService {
  gameConfigService = inject(GameConfigService);

  calculate(data: Partial<Trick>[][]) {
    return data.reduce((acc, round) => {
      for (let i = 0; i < round.length; i++) {
        if (!acc[i]) acc[i] = 0;
        acc[i] += this.calculateTrick(round[i]);
      }
      return acc;
    }, [] as number[]);
  }

  private calculateTrick(trick: Partial<Trick>) {
    const config = this.gameConfigService.config();
    if (trick.tricksBid && trick.tricksBid === trick.tricksWon) {
      return config.baseScore + config.trickValue * trick.tricksWon;
    } else if (trick.tricksBid && trick.tricksWon) {
      const difference = Math.abs(trick.tricksBid - trick.tricksWon);
      return -(config.bidPenalty * difference + (config.constantPenalty ?? 0));
    }
    return 0;
  }
}
