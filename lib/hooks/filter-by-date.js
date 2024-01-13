"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (options = {}) => {
    return async (context) => {
        var _a;
        const { date, ...query } = (_a = context.params.query) !== null && _a !== void 0 ? _a : {};
        if (date) {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);
            context.params.query = {
                ...query,
                type: {
                    $in: ['breakfast', 'lunch', 'dinner', 'snack'],
                },
                $or: [
                    {
                        date: {
                            $gt: startOfDay.toISOString(),
                            $lt: endOfDay.toISOString(),
                        },
                    },
                    {
                        date: {
                            $gt: startOfDay,
                            $lt: endOfDay,
                        },
                    },
                ],
            };
        }
        return context;
    };
};
