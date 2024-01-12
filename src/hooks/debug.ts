// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

import { HookContext } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}) => {
  return async (context: HookContext): Promise<HookContext> => {
    return context;
  };
};
