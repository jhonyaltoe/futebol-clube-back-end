"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const options = {
    expiresIn: '1d',
    algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET || 'jwt_secret';
function jwtGenerator(payload) {
    const token = (0, jsonwebtoken_1.sign)(payload, secret, options);
    return token;
}
exports.default = jwtGenerator;
//# sourceMappingURL=jwtGenerator.js.map