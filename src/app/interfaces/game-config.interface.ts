export interface GameConfig {
  baseScore: number; // Base score for a correct bid (default: 20)
  trickValue: number; // Points per trick won (WAL) (default: 10)

  bidPenalty: number; // Points lost per trick over/under bid (default: 10)
  constantPenalty?: number; // Optional constant penalty for an incorrect bid
}
