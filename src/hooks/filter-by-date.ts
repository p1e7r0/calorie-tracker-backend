// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
     const { date, ...query } = context.params.query ?? {};
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    console.log('file: filter-by-date.ts ~ line 10 ~ startOfDay', startOfDay, endOfDay);
    context.params.query = {
      ...query,
      date: {
        $gt: startOfDay,
        $lt: endOfDay,
      },
    };
    //context.params.query = {...query};
    return context;
  };
};
