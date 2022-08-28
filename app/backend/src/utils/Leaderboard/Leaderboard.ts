import { IMatcheFKV } from '../../database/entities';
import {
  ILeaderboardResult,
  IMatcheBoard, ITeamInfo,
  ILocal,
  IWinDrawOrLose,
  ILocalGoals,
  IFavorOwn,
} from './ILeaderboard';

export default class Leaderboard {
  private leaderboadArr: ILeaderboardResult[] = [];
  private rvLocal: ILocal;
  private localGoals: ILocalGoals;
  private rvLocalGoals: ILocalGoals;
  private goalsDiference: number;
  private wdlAttr: IWinDrawOrLose;

  private calcEfficiency = (totalPoints: number, totalGames: number): string =>
    ((totalPoints / (totalGames * 3)) * 100).toFixed(2);

  private winDrawOrLose = (goalsDiference: number): IWinDrawOrLose => {
    let answare: IWinDrawOrLose = { win: 0, draw: 0, lose: 0, points: 0 };
    if (goalsDiference > 0) answare = { ...answare, win: 1, points: 3 };
    else if (goalsDiference < 0) answare = { ...answare, lose: 1, points: 0 };
    else answare = { ...answare, draw: 1, points: 1 };
    return answare;
  };

  private calcPoints = (teamInfo: ITeamInfo) => {
    const { points } = this.wdlAttr;
    if (teamInfo) return teamInfo.totalPoints + points;
    return points;
  };

  private hdTotalGames = (teamInfo: ITeamInfo) => {
    if (teamInfo) return teamInfo.totalGames + 1;
    return 1;
  };

  private sumGoals = (teamInfo: ITeamInfo, match: IMatcheBoard, option: IFavorOwn) => {
    const goals: ILocalGoals = option === 'goalsFavor' ? this.localGoals : this.rvLocalGoals;
    if (teamInfo) return teamInfo[option] + match[goals];
    return match[goals];
  };

  private generateObjTeam = (teamInfo: ITeamInfo, match: IMatcheBoard): any => ({
    name: match.teamName,
    totalPoints: this.calcPoints(teamInfo),
    totalGames: this.hdTotalGames(teamInfo),
    totalVictories: teamInfo ? teamInfo.totalVictories + this.wdlAttr.win : this.wdlAttr.win,
    totalDraws: teamInfo ? teamInfo.totalDraws + this.wdlAttr.draw : this.wdlAttr.draw,
    totalLosses: teamInfo ? teamInfo.totalLosses + this.wdlAttr.lose : this.wdlAttr.lose,
    goalsFavor: this.sumGoals(teamInfo, match, 'goalsFavor'),
    goalsOwn: this.sumGoals(teamInfo, match, 'goalsOwn'),
    goalsBalance: this.sumGoals(teamInfo, match, 'goalsFavor')
      - this.sumGoals(teamInfo, match, 'goalsOwn'),
    efficiency: +this.calcEfficiency(this.calcPoints(teamInfo), this.hdTotalGames(teamInfo)),
  });

  private handleAddleaderboad = (teamInfo: ITeamInfo, leaderboardResult: ILeaderboardResult) => {
    if (teamInfo) {
      const index = this.leaderboadArr.findIndex(({ name }) => name === teamInfo.name);
      this.leaderboadArr.splice(index, 1, leaderboardResult);
    } else {
      this.leaderboadArr.push(leaderboardResult);
    }
  };

  private sort = (board: ILeaderboardResult[]) => (
    board.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsOwn > b.goalsOwn) return -1;
      if (a.goalsOwn < b.goalsOwn) return 1;
      return 0;
    }));

  public generate(matches: IMatcheFKV[], local: ILocal) {
    this.rvLocal = local === 'homeTeam' ? 'awayTeam' : 'homeTeam';
    this.localGoals = `${local}Goals`;
    this.rvLocalGoals = `${this.rvLocal}Goals`;

    const matchesForBoard: IMatcheBoard[] = matches.map(({ teamHome, teamAway, id, ...rest }) =>
      ({ ...rest, teamName: local === 'homeTeam' ? teamHome.teamName : teamAway.teamName }));

    matchesForBoard.forEach((match): void => {
      this.goalsDiference = match[this.localGoals] - match[this.rvLocalGoals];
      this.wdlAttr = this.winDrawOrLose(this.goalsDiference);
      const teamInfo = this.leaderboadArr.find(({ name }) => name === match.teamName);
      const leaderboardResult = this.generateObjTeam(teamInfo, match);
      this.handleAddleaderboad(teamInfo, leaderboardResult);
    });
    const result = this.leaderboadArr;
    this.leaderboadArr = [];
    return this.sort(result);
  }

  public bothLeaderboards = (matches: IMatcheFKV[]): ILeaderboardResult[] => {
    const firstBoardArr = this.generate(matches, 'homeTeam');
    const secondBoardArr = this.generate(matches, 'awayTeam');
    const orderArr = firstBoardArr.map((f) => secondBoardArr.find((s) => s.name === f.name));
    firstBoardArr.forEach((e, i) => {
      e.totalPoints += (orderArr[i]?.totalPoints || 0);
      e.totalGames += (orderArr[i]?.totalGames || 0);
      e.totalVictories += (orderArr[i]?.totalVictories || 0);
      e.totalDraws += (orderArr[i]?.totalDraws || 0);
      e.totalLosses += (orderArr[i]?.totalLosses || 0);
      e.goalsFavor += (orderArr[i]?.goalsFavor || 0);
      e.goalsOwn += (orderArr[i]?.goalsOwn || 0);
      e.goalsBalance = e.goalsFavor - e.goalsOwn;
      e.efficiency = +this.calcEfficiency(e.totalPoints, e.totalGames);
    });
    return this.sort(firstBoardArr);
  };
}
