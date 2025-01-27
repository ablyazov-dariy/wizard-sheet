import { GameConfigInterface } from '@interfaces/game-config.interface';

export class GameConfig implements GameConfigInterface {
  constructor(
    public baseScore: number,
    public bidPenalty: number,
    public constantPenalty: number,
    public trickValue: number,
  ) {}
}
