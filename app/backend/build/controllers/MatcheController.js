"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class MatcheController {
    constructor(matcheService) {
        this.matcheService = matcheService;
        this.getAll = (0, utils_1.controllerWrapper)(async (_req, res) => {
            const matches = await this.matcheService.getAll();
            res.status(200).json(matches);
        });
        this.createMatch = (0, utils_1.controllerWrapper)(async (req, res) => {
            const newMatche = await this.matcheService.createMatch(req.body);
            res.status(201).json(newMatche);
        });
        this.finishMatch = (0, utils_1.controllerWrapper)(async (req, res) => {
            const { id } = req.params;
            const finish = await this.matcheService.finishMatch(Number(id));
            if (finish.status) {
                res.sendStatus(finish.status);
                return;
            }
            res.status(200).json(finish.message);
        });
        this.update = (0, utils_1.controllerWrapper)(async (req, res) => {
            const { id } = req.params;
            this.matcheService.update(Number(id), req.body);
            res.status(200).json({ message: 'Successfully updated!' });
        });
    }
}
exports.default = MatcheController;
//# sourceMappingURL=MatcheController.js.map