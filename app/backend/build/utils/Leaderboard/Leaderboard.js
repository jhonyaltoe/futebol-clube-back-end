"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    constructor() {
        this.leaderboadArr = [];
        this.calcEfficiency = (totalPoints, totalGames) => ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
        this.winDrawOrLose = (goalsDiference) => {
            let answare = { win: 0, draw: 0, lose: 0, points: 0 };
            if (goalsDiference > 0)
                answare = { ...answare, win: 1, points: 3 };
            else if (goalsDiference < 0)
                answare = { ...answare, lose: 1, points: 0 };
            else
                answare = { ...answare, draw: 1, points: 1 };
            return answare;
        };
        this.calcPoints = (teamInfo) => {
            const { points } = this.wdlAttr;
            if (teamInfo)
                return teamInfo.totalPoints + points;
            return points;
        };
        this.hdTotalGames = (teamInfo) => {
            if (teamInfo)
                return teamInfo.totalGames + 1;
            return 1;
        };
        this.sumGoals = (teamInfo, match, option) => {
            const goals = option === 'goalsFavor' ? this.localGoals : this.rvLocalGoals;
            if (teamInfo)
                return teamInfo[option] + match[goals];
            return match[goals];
        };
        this.generateObjTeam = (teamInfo, match) => ({
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
        this.handleAddleaderboad = (teamInfo, leaderboardResult) => {
            if (teamInfo) {
                const index = this.leaderboadArr.findIndex(({ name }) => name === teamInfo.name);
                this.leaderboadArr.splice(index, 1, leaderboardResult);
            }
            else {
                this.leaderboadArr.push(leaderboardResult);
            }
        };
        this.sort = (board) => (board.sort((a, b) => {
            if (a.totalPoints > b.totalPoints)
                return -1;
            if (a.totalPoints < b.totalPoints)
                return 1;
            if (a.totalVictories > b.totalVictories)
                return -1;
            if (a.totalVictories < b.totalVictories)
                return 1;
            if (a.goalsBalance > b.goalsBalance)
                return -1;
            if (a.goalsBalance < b.goalsBalance)
                return 1;
            if (a.goalsFavor > b.goalsFavor)
                return -1;
            if (a.goalsFavor < b.goalsFavor)
                return 1;
            if (a.goalsOwn > b.goalsOwn)
                return -1;
            if (a.goalsOwn < b.goalsOwn)
                return 1;
            return 0;
        }));
        this.bothLeaderboards = (matches) => {
            const firstBoardArr = this.generate(matches, 'homeTeam');
            const secondBoardArr = this.generate(matches, 'awayTeam');
            const orderArr = firstBoardArr.map((f) => secondBoardArr.find((s) => s.name === f.name));
            firstBoardArr.forEach((e, i) => {
                var _a, _b, _c, _d, _e, _f, _g;
                e.totalPoints += (((_a = orderArr[i]) === null || _a === void 0 ? void 0 : _a.totalPoints) || 0);
                e.totalGames += (((_b = orderArr[i]) === null || _b === void 0 ? void 0 : _b.totalGames) || 0);
                e.totalVictories += (((_c = orderArr[i]) === null || _c === void 0 ? void 0 : _c.totalVictories) || 0);
                e.totalDraws += (((_d = orderArr[i]) === null || _d === void 0 ? void 0 : _d.totalDraws) || 0);
                e.totalLosses += (((_e = orderArr[i]) === null || _e === void 0 ? void 0 : _e.totalLosses) || 0);
                e.goalsFavor += (((_f = orderArr[i]) === null || _f === void 0 ? void 0 : _f.goalsFavor) || 0);
                e.goalsOwn += (((_g = orderArr[i]) === null || _g === void 0 ? void 0 : _g.goalsOwn) || 0);
                e.goalsBalance = e.goalsFavor - e.goalsOwn;
                e.efficiency = +this.calcEfficiency(e.totalPoints, e.totalGames);
            });
            return this.sort(firstBoardArr);
        };
    }
    generate(matches, local) {
        this.rvLocal = local === 'homeTeam' ? 'awayTeam' : 'homeTeam';
        this.localGoals = `${local}Goals`;
        this.rvLocalGoals = `${this.rvLocal}Goals`;
        const matchesForBoard = matches.map(({ teamHome, teamAway, id, ...rest }) => ({ ...rest, teamName: local === 'homeTeam' ? teamHome.teamName : teamAway.teamName }));
        matchesForBoard.forEach((match) => {
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
}
exports.default = Leaderboard;
//# sourceMappingURL=Leaderboard.js.map