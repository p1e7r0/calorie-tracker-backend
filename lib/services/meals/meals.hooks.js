"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_many_1 = __importDefault(require("../../hooks/delete-many"));
const filter_by_date_1 = __importDefault(require("../../hooks/filter-by-date"));
const filter_leftovers_1 = __importDefault(require("../../hooks/filter-leftovers"));
exports.default = {
    before: {
        all: [],
        find: [(0, filter_by_date_1.default)(), (0, filter_leftovers_1.default)()],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [(0, delete_many_1.default)()],
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
