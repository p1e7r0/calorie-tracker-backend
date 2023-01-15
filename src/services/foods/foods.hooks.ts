import search from '../../hooks/search';

import deleteMany from '../../hooks/delete-many';

export default {
  before: {
    all: [],
    find: [search()],
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
