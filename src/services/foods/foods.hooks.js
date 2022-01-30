const search = require('../../hooks/search');


const deleteMany = require('../../hooks/delete-many');


module.exports = {
  before: {
    all: [],
    find: [search()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [deleteMany()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
