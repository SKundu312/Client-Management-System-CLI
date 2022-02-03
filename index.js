const mongoose = require('mongoose');

//map global promise  to get rid of warning
mongoose.Promise = global.Promise;
//connect to db
const db = mongoose.connect("mongodb://localhost:27017/customercli", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

//import model
const Customer = require('./models/customer');

//add customer
const addCustomer = (customer) => {
     Customer.create(customer).then(customer => {
          console.info('New Customer added:');
          
     })
}

//update customer
const updateCustomer = (_id, customer) => {
     Customer.updateOne({ _id }, customer).then(customer => {
          console.info('Customer updated:');
     })
}

//remove customer
const removeCustomer = (_id) => {
	Customer.remove({ _id }).then((customer) => {
		console.info("Customer updated:");
	});
};

//list customers
const listCustomers = () => {
     Customer.find().then(customers => {
          console.info(customers)
          console.info(`${customers.length} customers`)
     })
}

//find customer
const findCustomer = (name) => {
     //make case insensitive
     const search = new RegExp(name, 'i')
     Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(customer => {
          console.info(customer)
          console.info(`${customer.length} matches`)
     
     })
}

//export all methods
module.exports = {
     addCustomer,
     findCustomer,
     listCustomers,
     updateCustomer,
     removeCustomer
}
