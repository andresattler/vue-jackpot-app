export interface Draw {
  numbers: string[];
  additionalNumbers: string[];
  jackpot: number;
  date: string;
}

export enum DrawTypes {
  megamillions = 'megamillions',
  powerball = 'powerball',
  eurojackpot = 'eurojackpot'
}
