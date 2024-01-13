"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterBefore2024 = (options = {}) => {
    return async (context) => {
        var _a;
        const { query } = (_a = context.params.query) !== null && _a !== void 0 ? _a : {};
        context.params.query = {
            ...query,
            date: {
                $gt: new Date(2023, 1, 1).toISOString(),
            },
            $sort: {
                date: 1,
            },
        };
        return context;
    };
};
exports.default = filterBefore2024;
