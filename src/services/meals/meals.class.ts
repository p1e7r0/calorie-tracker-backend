import { Db } from 'mongodb';
import { Service, MongoDBServiceOptions } from 'feathers-mongodb';
import { Application } from '../../declarations';
import Meal from '../../models/Meal';

export class Meals extends Service<Meal> {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MongoDBServiceOptions>, app: Application) {
    super(options);

    const client: Promise<Db> = app.get('mongoClient');

    client.then(db => {
      this.Model = db.collection('meals');
    });
  }
};
