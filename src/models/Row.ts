import Food from "./Food";

interface Row {
  id: string;
  food: Food;
  quantity: number;
  unit: string;
  foodKcal: number;
  userKcal: {
    [key: string]: {
      percentage: number;
      kcal: number;
    };
  };
}

export default Row;
