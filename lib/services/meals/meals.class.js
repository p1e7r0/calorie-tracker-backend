"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meals = void 0;
const feathers_mongodb_1 = require("feathers-mongodb");
class Meals extends feathers_mongodb_1.Service {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(options, app) {
        super(options);
        const client = app.get('mongoClient');
        client.then((db) => {
            this.Model = db.collection('meals');
        });
    }
}
exports.Meals = Meals;
