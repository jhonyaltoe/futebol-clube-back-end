"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserRepository {
    constructor() {
        this.user = User_1.default;
    }
    async login(email) {
        const user = await this.user.findOne({ where: { email } });
        return user;
    }
    async loginValidate(email) {
        const user = await this.user.findOne({ where: { email } });
        return user === null || user === void 0 ? void 0 : user.role;
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map