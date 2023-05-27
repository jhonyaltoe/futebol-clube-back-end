"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=controllerWrapper.js.map