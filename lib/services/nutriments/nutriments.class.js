"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nutriments = exports.users = void 0;
exports.users = [
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
class Nutriments {
    constructor(options = {}, app) {
        this.options = options;
        this.app = app;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async find(params) {
        const meals = this.app.service('meals');
        const items = await meals.find(params);
        const foods = await this.app.service('foods').find({ paginate: false });
        const foodsMap = foods.reduce((acc, food) => ({ ...acc, [food._id]: food }), {});
        const result = exports.users.map((user) => {
            const data = {
                _id: 'id',
                carbohydrates_g: 0,
                protein_g: 0,
                fat_g: 0,
                kcal: 0,
            };
            items.forEach((meal) => {
                var _a;
                (_a = meal.rows) === null || _a === void 0 ? void 0 : _a.forEach(async ({ food: { _id, ...rest }, quantity }) => {
                    var _a, _b, _c, _d, _e;
                    const food = (_a = foodsMap[_id]) !== null && _a !== void 0 ? _a : rest;
                    data.carbohydrates_g =
                        data.carbohydrates_g + ((_b = food.carbohydrates_g) !== null && _b !== void 0 ? _b : 0) * (quantity / 100.0);
                    data.protein_g = data.protein_g + ((_c = food.protein_g) !== null && _c !== void 0 ? _c : 0) * (quantity / 100.0);
                    data.fat_g = data.fat_g + ((_d = food.fat_g) !== null && _d !== void 0 ? _d : 0) * (quantity / 100.0);
                    data.kcal = data.kcal + ((_e = food.kcal) !== null && _e !== void 0 ? _e : 0) * (quantity / 100.0);
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
exports.Nutriments = Nutriments;
