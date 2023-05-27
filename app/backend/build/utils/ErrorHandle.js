"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustonError = void 0;
class CustonError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.statusCode = statusCode;
    }
}
exports.CustonError = CustonError;
function HandleThrowError(message, status) {
    throw new CustonError(message, status);
}
exports.default = HandleThrowError;
//# sourceMappingURL=ErrorHandle.js.map