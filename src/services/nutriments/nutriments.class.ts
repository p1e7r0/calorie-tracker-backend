import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import Food from '../../models/Food';
import Meal from '../../models/Meal';

interface User {
  id: string;
  givenName: string;
  familyName: string;
}

export const users: Array<User> = [
  {
    id: "ca2acdc5-0879-4ddd-b03c-7701d941e307",
    givenName: "Pietro",
    familyName: "Balestra",
  },
  {
    id: "b2a50105-d171-4ae2-b490-755e728fccab",
    givenName: "Elena",
    familyName: "Bellinelli",
  },
];


interface Data {
  id?: number | string,
  carbohydrates_g: number,
  protein_g: number,
  fat_g: number,
  kcal: number,
}

interface ServiceOptions {}

export class Nutriments {
  app: Application;
  options: ServiceOptions;

  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    const meals = this.app.service('meals');
    const items = await meals.find( params);
   
    const result = users.map(user => {
      const data: Data = {
        carbohydrates_g: 0,
        protein_g: 0,
        fat_g: 0,
        kcal: 0,
      };
      (items as Meal[]).forEach(meal => {
        meal.rows?.forEach(({userKcal, food, quantity}) => {
            const { percentage } = userKcal[user.id];
            data.carbohydrates_g = data.carbohydrates_g + (food.carbohydrates_g ?? 0) * percentage * (quantity / 100.0);
            data.protein_g = data.protein_g + (food.protein_g ?? 0)* percentage * (quantity / 100.0);
            data.fat_g = data.fat_g +  (food.fat_g ?? 0) *  percentage * (quantity / 100.0);
            data.kcal = data.kcal +  (food.kcal ?? 0) *  percentage * (quantity / 100.0);
          });
        });
      return {
        ...user,
        carbohydrates_g: Math.round(data.carbohydrates_g),
        protein_g: Math.round(data.protein_g),
        fat_g: Math.round(data.fat_g),
        kcal: Math.round(data.kcal),
      }
    
    });
    return result;
  }

}
