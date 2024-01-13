"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
function default_1(app) {
    const connection = app.get('mongodb');
    const database = connection.substr(connection.lastIndexOf('/') + 1);
    console.log('database:', database);
    const mongoClient = mongodb_1.MongoClient.connect(connection).then((client) => client.db(database));
    app.set('mongoClient', mongoClient);
}
exports.default = default_1;
