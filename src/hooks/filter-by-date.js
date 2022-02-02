module.exports = () => {
  return async (context) => {
    const { date, ...query } = context.params.query;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    context.params.query = {
      ...query,
      date: {
        $gt: startOfDay.getTime(),
        $lt: endOfDay.getTime(),
      },
    };
    return context;
  };
};
