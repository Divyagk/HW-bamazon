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
    var query = "SELECT departments.department_id,departments.department_name,departments.over_head_costs,products.product_sales,    departments.over_head_costs-products.product_sales total_profit FROM departments LEFT JOIN products ON products.item_id=departments.department_id";


    connection.query(query, function (err, results) {
        if (err) throw err;
        // to display the database details in a table
        console.table(results);
        option();

    });

}
function newdepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentname",
            message: "What department would you like to add? "
        },
        {
            type: "input",
            name: "overheadcosts",
            message: "What is the over head cost of that department?"
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO departments SET? ",

            {
                department_name: answer.departmentname,
                over_head_costs: answer.overheadcosts

            },
            function (error) {
                if (error) throw error;
                console.log("The new department is added.")
                option();
            }
        )

    })


}



