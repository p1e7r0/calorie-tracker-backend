// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { HookContext } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}) => {
  return async (context: HookContext): Promise<HookContext> => {
    const { search } = context.params.query || {};
    if (search) {
      const query = {
        name: {
          $all: (search as string).split(' ').map((regexp) => new RegExp(regexp, 'i')),
        },
        $sort: {
          priority: -1,
        },
      };

      context.params.query = query;
    }
    return context;
  };
};
