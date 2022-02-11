// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { search } = context.params.query || {};
    if (search) {
      const query = {
        name: {
          $all: (search as string)
            .split(" ")
            .map((regexp) => new RegExp(regexp, "i")),
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
