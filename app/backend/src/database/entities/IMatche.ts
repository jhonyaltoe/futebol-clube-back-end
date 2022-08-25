export interface ITeamGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export default interface IMatche extends ITeamGoals {
  id?: number;
  homeTeam: number;
  awayTeam: number;
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
