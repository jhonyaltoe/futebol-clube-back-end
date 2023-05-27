"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Factory_1 = require("../Factory");
const teamRouter = (0, express_1.Router)();
const teamController = Factory_1.default.team();
teamRouter.get('/teams', teamController.getAll);
teamRouter.get('/teams/:id', teamController.getOne);
exports.default = teamRouter;
//# sourceMappingURL=teamRouter.js.map