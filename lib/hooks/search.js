"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.default = (options = {}) => {
    return async (context) => {
        const { search } = context.params.query || {};
        if (search) {
            const query = {
                name: {
                    $all: search.split(' ').map((regexp) => new RegExp(regexp, 'i')),
                },
                $sort: {
                    priority: -1,
                },
            };
            context.params.query = query;
        }
        return context;
    };
};
