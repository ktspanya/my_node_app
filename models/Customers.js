var mongoose = require('mongoose');

    //code will come here to insert customer in mongo database
      var Schema = mongoose.Schema;
    // create a schema
    var CustomerSchema = new Schema({
      name: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      age: { type: String, required: true }
      
    });

   //register as model and export it with name Customers
  module.exports = mongoose.model('Customers', CustomerSchema)

  