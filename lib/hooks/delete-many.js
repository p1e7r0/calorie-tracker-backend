"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const mongodb_1 = require("mongodb");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (options = {}) => {
    return async (context) => {
        var _a;
        const { query = {} } = (_a = context.params) !== null && _a !== void 0 ? _a : {};
        const items = query.$in;
        context.params.query = {
            _id: {
                $in: items.map((item) => new mongodb_1.ObjectId(item)),
            },
        };
        return context;
    };
};
