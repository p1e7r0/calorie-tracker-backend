"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = exports.isErrorWithResponse = exports.ErrorResponse = void 0;
class ErrorResponse extends Error {
    constructor(message, response) {
        super(message);
        this.message = '';
        this.name = '';
        this.stack = '';
        this.response = response;
    }
}
exports.ErrorResponse = ErrorResponse;
const isErrorWithResponse = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error) => { var _a; return !!(error instanceof Error && ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data)); };
exports.isErrorWithResponse = isErrorWithResponse;
const isError = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error) => !!(error instanceof Error);
exports.isError = isError;
