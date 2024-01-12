// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { HookContext } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterBefore2024 = (options = {}) => {
  return async (context: HookContext): Promise<HookContext> => {
    const { query } = context.params.query ?? {};

    context.params.query = {
      ...query,

      date: {
        $gt: new Date(2023, 1, 1).toISOString(),
      },

      $sort: {
        date: 1,
      },
    };

    return context;
  };
};

export default filterBefore2024;
