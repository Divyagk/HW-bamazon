var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "127.0.0.1",

    port: 8889,

    user: "root",

    password: "root",

    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the question function after the connection is made to prompt the user
    option()
});
function option() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Product Sales by Department",
                "Create New Department"
            ]
        }
    ]).then(function (answer) {
        switch (answer.action) {
            case "View Product Sales by Department":
                productsale();
                break;

            case "Create New Department":
                newdepartment();
                break;
        }



    })
}


function productsale() {
    connection.query("SELECT  department_id ,department_name ,over_head_costs FROM departments", 
    function (err, results) {
        if (err) throw err;
        // to display the database details in a table
        console.table(results);

    });

}
// function newdepartment(){

// }



