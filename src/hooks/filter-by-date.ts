// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { date, ...query } = context.params.query ?? {};
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      context.params.query = {
        ...query,
        type: {
          $in: ['breakfast', 'lunch', 'dinner', 'snack'],
        },
        $or: [
          {
            date: {
              $gt: startOfDay.toISOString(),
              $lt: endOfDay.toISOString(),
            },
          },
          {
            date: {
              $gt: startOfDay,
              $lt: endOfDay,
            },
          },
        ],
      };
    }
    return context;
  };
};
