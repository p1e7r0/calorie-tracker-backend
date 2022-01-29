const { Service } = require('feathers-mongodb');

exports.Foods = class Foods extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('foods');
    });
  }
};
