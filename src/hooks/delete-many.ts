// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import { ObjectId } from 'mongodb';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { query = {} } = context.params ?? {};
    const items = query.$in as Array<string>;
    context.params.query = {
      _id: {
        $in: items.map((item) => new ObjectId(item)),
      },
    };
    return context;
  };
};
