import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { search } = context.params.query || {};
    if (search) {
      console.log(context.params.query);

      const query = {
        name: {
          $all: search.split(' ').map((s : string) => new RegExp(s, 'i'))
        },
      };

      context.params.query = query;
    }
    return context;
  };
};
