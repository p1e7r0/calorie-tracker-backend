import Food from './Food';

interface Row {
  id: string;
  food: Food;
  quantity: number;
  unit: string;
  foodKcal: number;
}

export default Row;
