import Row from './Row';
import MealType from './MealType';

interface Meal {
  _id?: string;
  type?: MealType;
  date?: Date;
  kcalTotal?: number;
  rows?: Array<Row>;
}

export default Meal;
