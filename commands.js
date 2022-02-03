#!/usr/bin/env node
const program = require("commander");
const { prompt } = require("inquirer");
const {
	addCustomer,
	findCustomer,
	listCustomers,
	updateCustomer,
	removeCustomer,
} = require("./index");

//customer questions
const questions = [
	{
		type: "input",
		name: "firstname",
		message: "Customer First Name",
	},
	{
		type: "input",
		name: "lastname",
		message: "Customer Last Name",
	},
	{
		type: "input",
		name: "phone",
		message: "Customer Phone Number",
	},
	{
		type: "input",
		name: "email",
		message: "Customer Email Address",
	},
];

program.version("1.0.0").description("Client Management System");
// program.command('add <firstname> <lastname> <phone> <email>').alias('a').description('Add a customer').action((firstname, lastname, phone, email) => {
//      addCustomer({ firstname, lastname, phone, email })
// })

//add command
program
	.command("add")
	.alias("a")
	.description("Add a customer")
	.action(() => {
		prompt(questions).then((answers) => addCustomer(answers));
	});

//find command
program
	.command("find <name>")
	.alias("f")
	.description("Find a customer")
	.action((name) => {
		findCustomer(name);
	});

//update command
program
	.command("update <id>")
	.alias("u")
	.description("Update a customer")
	.action((_id) => {
		prompt(questions).then((answers) => updateCustomer(_id, answers));
	});

//remove command
program
	.command("remove <id>")
	.alias("r")
	.description("Remove a customer")
	.action((_id) => {
		removeCustomer(_id);
	});

//list all customers
program
	.command("list")
	.alias("l")
	.description("List all customers")
	.action(() => {
		listCustomers();
	});

program.parse(process.argv);
