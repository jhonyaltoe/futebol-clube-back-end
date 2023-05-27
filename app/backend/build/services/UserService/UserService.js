"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const utils_1 = require("../../utils");
class UserService {
    constructor(user) {
        this.user = user;
    }
    async login(login) {
        const user = await this.user.login(login.email);
        if (user) {
            const isValid = await (0, bcryptjs_1.compare)(login.password, user.password);
            if (!isValid)
                (0, utils_1.HandleThrowError)('Incorrect email or password', 401);
            const token = (0, utils_1.jwtGenerator)({
                email: user.email,
                username: user.username,
                role: user.role,
            });
            return { token };
        }
        if (user === null)
            (0, utils_1.HandleThrowError)('Incorrect email or password', 401);
    }
    async loginValidate(email) {
        const role = await this.user.loginValidate(email);
        if (!role)
            (0, utils_1.HandleThrowError)('The user do not exist', 401);
        return role;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map