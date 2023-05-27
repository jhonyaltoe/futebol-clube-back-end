"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Factory_1 = require("../Factory");
const middlewares_1 = require("../middlewares");
const matcheRouter = (0, express_1.Router)();
const matcheController = Factory_1.default.matche();
matcheRouter.get('/matches', matcheController.getAll);
matcheRouter.post('/matches', middlewares_1.Aunth.tokenJWT, middlewares_1.Validations.createMatch, matcheController.createMatch);
matcheRouter.patch('/matches/:id/finish', matcheController.finishMatch);
matcheRouter.patch('/matches/:id', matcheController.update);
exports.default = matcheRouter;
//# sourceMappingURL=matcheRouter.js.map