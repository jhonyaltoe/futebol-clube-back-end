export interface ILeaderboardResult {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface IMatcheBoard {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamName: string;
}

export interface IWinDrawOrLose {
  win: 1 | 0;
  draw: 1 | 0;
  lose: 1 | 0;
  points: 3 | 0 | 1;
}

export type IFavorOwn = 'goalsFavor' | 'goalsOwn';
export type ITeamInfo = ILeaderboardResult | undefined;
export type ILocal = 'homeTeam' | 'awayTeam';
export type ILocalGoals = 'homeTeamGoals' | 'awayTeamGoals';
