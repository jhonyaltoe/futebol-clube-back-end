export default interface IMatche {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatcheFK extends IMatche {
  teamHome?: {
    teamName: string;
  }
  teamAway?: {
    teamName: string;
  }
}

export interface IMatcheCreate {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
}
