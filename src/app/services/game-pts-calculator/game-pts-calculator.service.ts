import { Injectable } from '@angular/core';
import { Trick } from '@interfaces/trick.interface';
import { GameConfigInterface } from '@interfaces/game-config.interface';

@Injectable({
  providedIn: 'root',
})
export class GamePtsCalculatorService {
  calculate(data: Partial<Trick>[][], config: GameConfigInterface) {
    return data.reduce((acc, round) => {
      for (let i = 0; i < round.length; i++) {
        if (!acc[i]) acc[i] = 0;
        acc[i] += this.calculateTrick(round[i], config);
      }
      return acc;
    }, [] as number[]);
  }

  private calculateTrick(trick: Partial<Trick>, config: GameConfigInterface) {
    if (trick.tricksBid && trick.tricksBid === trick.tricksWon) {
      return config.baseScore + config.trickValue * trick.tricksWon;
    } else if (trick.tricksBid && trick.tricksWon) {
      const difference = Math.abs(trick.tricksBid - trick.tricksWon);
      return -(config.bidPenalty * difference + (config.constantPenalty ?? 0));
    }
    return 0;
  }
}
