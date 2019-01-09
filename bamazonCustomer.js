var mysql = require("mysql");
var inquirer = require("inquirer");

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
    question();
});

function question() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                type: "rawlist",
                name: "id",
                choices: function () {
                    var choiceArray=[];
                    for (i = 0; i < results.length; i++) {
                        // console.log(results)
                        choiceArray.push(results[i].product_name);

                    }
                    return choiceArray;

                },
                message: "Enter the ID of the product you would like to buy?"
            },

            {
                type: "input",
                name: "units",
                message: "How many units of the product you would like to buy?"
            }
        ]).then(function (answer) {


        })
    })
}