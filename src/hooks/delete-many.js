// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    context.params = { query : { _id: context.params.query }};
    console.log('file: delete-many.js ~ line 8 ~ context.params', context.params);
    return context;
  };
};
