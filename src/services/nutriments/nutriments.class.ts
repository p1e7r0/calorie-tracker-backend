import { Paginated, Params } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import Food from '../../models/Food';
import Meal from '../../models/Meal';

interface User {
  id: string;
  givenName: string;
  familyName: string;
  weight: number;
  kcal_max: number;
  protein_range: number[];
  carbohydrates_range: number[];
  fat_range: number[];
}

export const users: Array<User> = [
  {
    id: 'ca2acdc5-0879-4ddd-b03c-7701d941e307',
    givenName: 'Pietro',
    familyName: 'Balestra',
    weight: 81.2,
    kcal_max: 1745,
    protein_range: [80, 160],
    carbohydrates_range: [47, 139],
    fat_range: [41, 82],
  },
];

interface Data {
  user: User;
  food: Partial<Food>;
}

interface ServiceOptions {}

export class Nutriments {
  app: Application;
  options: ServiceOptions;

  constructor(options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(params?: Params): Promise<Data[] | Paginated<Data>> {
    const meals = this.app.service('meals');
    const items = await meals.find(params);

    const foods = await this.app.service('foods').find({ paginate: false });

    const foodsMap = (foods as Array<Food>).reduce(
      (acc, food) => ({ ...acc, [food._id]: food }),
      {},
    ) as {
      [key: string]: Food;
    };

    const result = users.map((user) => {
      const data: Food = {
        _id: 'id',
        carbohydrates_g: 0,
        protein_g: 0,
        fat_g: 0,
        kcal: 0,
      };

      (items as Meal[]).forEach((meal) => {
        meal.rows?.forEach(async ({ food: { _id, ...rest }, quantity }) => {
          const food = foodsMap[_id] ?? rest;

          data.carbohydrates_g =
            data.carbohydrates_g + (food.carbohydrates_g ?? 0) * (quantity / 100.0);
          data.protein_g = data.protein_g + (food.protein_g ?? 0) * (quantity / 100.0);
          data.fat_g = data.fat_g + (food.fat_g ?? 0) * (quantity / 100.0);
          data.kcal = data.kcal + (food.kcal ?? 0) * (quantity / 100.0);
        });
      });
      return {
        user,
        food: {
          carbohydrates_g: Math.round(data.carbohydrates_g),
          protein_g: Math.round(data.protein_g),
          fat_g: Math.round(data.fat_g),
          kcal: Math.round(data.kcal),
        },
      };
    });
    return result;
  }
}
