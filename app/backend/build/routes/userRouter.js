"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TokenAunth_1 = require("../middlewares/TokenAunth");
const Validations_1 = require("../middlewares/Validations");
const Factory_1 = require("../Factory");
const userRouter = (0, express_1.Router)();
const userController = Factory_1.default.user();
userRouter.post('/login', Validations_1.default.loginValidation, userController.login);
userRouter.get('/login/validate', TokenAunth_1.default.tokenJWT, userController.loginValidate);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map