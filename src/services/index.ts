import { Application } from '../declarations';
import foods from './foods/foods.service';
import meals from './meals/meals.service';
import nutriments from './nutriments/nutriments.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(foods);
  app.configure(meals);
  app.configure(nutriments);
}
