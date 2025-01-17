import { Injectable } from '@angular/core';
import { Trick } from '@interfaces/trick.interface';

@Injectable({
  providedIn: 'root',
})
export class GamePtsCalculatorService {
  data = [
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
    [
      {
        tricksBid: '1',
        tricksWon: '1',
      },
      {
        tricksBid: '2',
        tricksWon: '2',
      },
      {
        tricksBid: '3',
        tricksWon: '3',
      },
    ],
  ];

  calculate(data: { tricksBid?: number; tricksWon?: number }[][]) {
    return data.reduce((acc, round) => {
      for (let i = 0; i < round.length; i++) {
        if (!acc[i]) acc[i] = 0;
        acc[i] += this.calculateTrick(round[i]);
      }
      return acc;
    }, [] as number[]);
  }

  private calculateTrick(trick: Partial<Trick>) {
    return +(trick.tricksBid ?? 0) + +(trick.tricksWon ?? 0);
  }
}
