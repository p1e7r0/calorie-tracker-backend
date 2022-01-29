module.exports = () => {
  return async (context) => {
    const { search } = context.params.query || {};
    if (search) {
      console.log(context.params.query);

      const query = {
        name: {
          $all: search.split(' ').map( s => new RegExp(s, 'i'))
        },
      };

      context.params.query = query;
    }
    return context;
  };
};
