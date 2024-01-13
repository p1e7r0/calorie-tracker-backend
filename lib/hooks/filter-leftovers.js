"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (options = {}) => {
    return async (context) => {
        var _a;
        const { leftovers, ...query } = (_a = context.params.query) !== null && _a !== void 0 ? _a : {};
        if (leftovers) {
            context.params.query = {
                ...query,
                date: {
                    $gt: new Date(2024, 1, 1).toISOString(),
                },
                $sort: {
                    date: -1,
                },
            };
        }
        return context;
    };
};
