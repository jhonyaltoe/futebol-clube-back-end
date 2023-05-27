"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const teamRouter_1 = require("./teamRouter");
const matcheRouter_1 = require("./matcheRouter");
const leaderboardRoute_1 = require("./leaderboardRoute");
const route = (0, express_1.Router)();
route.get('/', (_, res) => res.status(200).send('Hello Futebol Clube API'));
route.use(userRouter_1.default);
route.use(teamRouter_1.default);
route.use(matcheRouter_1.default);
route.use(leaderboardRoute_1.default);
exports.default = route;
//# sourceMappingURL=router.js.map