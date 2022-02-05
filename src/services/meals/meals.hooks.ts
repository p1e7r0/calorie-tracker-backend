import { HooksObject } from '@feathersjs/feathers';

import deleteMany from '../../hooks/delete-many';

import filterByDate from '../../hooks/filter-by-date';

export default {
  before: {
    all: [],
    find: [filterByDate()],
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
