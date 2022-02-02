const deleteMany = require("../../hooks/delete-many");
const filterByDate = require("../../hooks/filter-by-date");

module.exports = {
  before: {
    all: [],
    find: [filterByDate()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [deleteMany()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
