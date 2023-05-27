"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class Validations {
}
Validations.loginValidation = (req, _res, next) => {
    const login = req.body;
    utils_1.Joi.joiValidateLogin(login);
    next();
};
Validations.createMatch = (req, _res, next) => {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
        (0, utils_1.HandleThrowError)('It is not possible to create a match with two equal teams', 401);
    }
    next();
};
exports.default = Validations;
//# sourceMappingURL=Validations.js.map