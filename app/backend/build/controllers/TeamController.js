"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class TeamController {
    constructor(team) {
        this.team = team;
        this.getAll = (0, utils_1.controllerWrapper)(async (_req, res) => {
            // const teams = await this.team.getAll();
            res.status(200).json('teams');
        });
        this.getOne = (0, utils_1.controllerWrapper)(async (req, res) => {
            const team = await this.team.getOne(Number(req.params.id));
            res.status(200).json(team);
        });
    }
}
exports.default = TeamController;
//# sourceMappingURL=TeamController.js.map