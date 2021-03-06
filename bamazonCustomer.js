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
    question();
});


function question() {

    var query = "SELECT products.item_id, products.product_name,products.price FROM products";


    connection.query(query, function (err, results) {
        if (err) throw err;
        // to display the database details in a table
        console.table(results);
        

    });

    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        
        inquirer.prompt([
            
            {

                name:"id",
                type: "input",
                message: "Enter the ID of the product you would like to buy?"

            },
            

            {
                type: "input",
                name: "units",
                message: "How many units of the product you would like to buy?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                      return true;
                    }
                    return false;
                  }
            }
        ]).then(function (answer) {
            // console.log(answer.id)
            // console.log(answer.units)
            var choiceArray;
            
            
            for (var i =0; i < results.length; i++) {

                if (results[i].item_id === parseInt(answer.id)) {
                    choiceArray = results[i];
                }
            }
            // console.log(choiceArray.item_id)

            if (choiceArray.stock_quantity > parseInt(answer.units)) {
                choiceArray.stock_quantity= choiceArray.stock_quantity - parseInt(answer.units);
                totalcosts=choiceArray.product_sales+choiceArray.price*parseInt(answer.units);
                // console.log(choiceArray.stock_quantity)
                
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                          {
                            stock_quantity: choiceArray.stock_quantity,
                            product_sales:totalcosts
                            
                          },
                          {
                        
                            item_id:choiceArray.item_id,
                            item_id:choiceArray.item_id,

                          }
                        ],
                    
                    function (err) {
                        if (err) throw err;
                        console.log("Your order is placed sucessfully");
                        totalcost=choiceArray.price*parseInt(answer.units);
                        console.log("Your total cost is $"+totalcost);
                        question();
                    }
                );


            }
            else {
                console.log("Insufficient quantity!");
                question();
            }

        })
    })
}