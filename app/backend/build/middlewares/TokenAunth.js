"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const utils_1 = require("../utils");
class Auth {
}
exports.default = Auth;
Auth.tokenJWT = (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        (0, utils_1.HandleThrowError)('The token is required', 401);
    try {
        const user = jwt.verify(authorization || 'undefined', process.env.JWT_SECRET);
        req.body.userAuth = user;
    }
    catch (e) {
        (0, utils_1.HandleThrowError)('Token must be a valid token', 401);
    }
    next();
};
//# sourceMappingURL=TokenAunth.js.map