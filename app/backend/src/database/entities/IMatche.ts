export interface ITeamGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatche {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatcheFK extends IMatche {
  teamHome?: {
    teamName: string;
  };
  teamAway?: {
    teamName: string;
  };
}

export interface IMatcheFKV extends IMatche {
  id: number;
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
}

export type MatcheCreate = {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
};
