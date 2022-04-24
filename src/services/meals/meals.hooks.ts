import deleteMany from '../../hooks/delete-many';
import filterByDate from '../../hooks/filter-by-date';
import filterLeftovers from '../../hooks/filter-leftovers';

export default {
  before: {
    all: [],
    find: [filterByDate(), filterLeftovers()],
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
