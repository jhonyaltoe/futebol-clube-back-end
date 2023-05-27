"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.login = (0, utils_1.controllerWrapper)(async (req, res) => {
            const token = await this.userService.login(req.body);
            return res.status(200).json(token);
        });
        this.loginValidate = (0, utils_1.controllerWrapper)(async (req, res) => {
            const role = await this.userService.loginValidate(req.body.userAuth.email);
            return res.status(200).json({ role });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map