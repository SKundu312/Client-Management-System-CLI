const mongoose = require('mongoose');

//customer schema
const customerSchema = new mongoose.Schema({
     firstname: {
          type:String
     },
     lastname: {
          type:String
     },
     phone: {
          type:Number
     },
     email: {
          type:String
     }
})

module.exports = mongoose.model('Customer', customerSchema);

