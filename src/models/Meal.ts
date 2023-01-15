import Row from './Row';
import MealType from './MealType';
import UserKcal from './UserKcal';

interface Meal {
  _id?: string;
  type?: MealType;
  date?: Date;
  kcalTotal?: number;
  userKcal?: UserKcal;
  rows?: Array<Row>;
}

export default Meal;
