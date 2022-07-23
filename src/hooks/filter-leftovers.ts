// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { leftovers, ...query } = context.params.query ?? {};
    if (leftovers) {
      context.params.query = {
        ...query,

        // type: {
        //   $in: ['breakfast', 'lunch', 'dinner', 'snack'],
        // },

        date: {
          $gt: new Date(2022, 6, 1).toISOString(),
        },

        $sort: {
          date: -1,
        },
        'userKcal.leftovers': {
          $gt: 0,
        },
      };
    }
    return context;
  };
};
