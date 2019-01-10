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
    search();
});
function search() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]


        }
    ]).then(function (answer) {

        switch (answer.action) {
            case "View Products for Sale":
                viewproduct();
                break;

            case "View Low Inventory":
                lowinventory();
                break;

            case "Add to Inventory":
                addtoinventory();
                break;

            case "Add New Product":
                addnewproduct();
                break;

        }

    })

}

function viewproduct() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            // console.log(results[i]);
            console.log("Item ID: " + results[i].item_id + " | " + " Product name: " + results[i].product_name + " | "
                + " Department name: " + results[i].department_name + " | "
                + " Price: " + results[i].price + " | " + " Stock quantity: " + results[i].stock_quantity);
        }

        search();
    })
}


function lowinventory() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            if (results[i].stock_quantity < 5) {
                // console.log("Item ID: " + results[i].item_id + " | " + " Product name: " + results[i].product_name + " | "
                //     + " Department name: " + results[i].department_name + " | "
                //     + " Price: " + results[i].price + " | " + " Stock quantity: " + results[i].stock_quantity);
                console.log("Product name:" + results[i].product_name);
            }
        }

        search();
    })


}
// function addtoinventory() {
//     connection.query("SELECT * FROM products", function (err, results) {
//         if (err) throw err;
//         inquirer.prompt([
//             {
//                 name: "choice",
//                 type: "rawlist",
//                 choices: function () {
//                     var chosenArray = [];
//                     for (var i = 0; i < results.length; i++) {
//                         chosenArray.push(results[i].product_name);
//                     }
//                     return chosenArray;
//                 },
//                 message: "What items would you like to add more?"
//             },
//             {
//                 name: "stockquantiy",
//                 type: "input",
//                 message: "How much would you like to add? "
//             }

//         ]).then(function (answer) {
//             var chosenproduct;
//             for (var i = 0; i < results.length; i++) {
//                 if (results[i].product_name === answer.choice) {
//                     chosenproduct = results[i];

//                 }
//  }
//  if(chosenproduct.product_name===answer.product_name){

//     connection.query(
//         "UPDATE products SET? WHERE?"[
//         {
//             stock_quantity: answer.stockquantity
//         },
//         {
//             product_name: chosenproduct.product_name
//         }
//         ],
//         function (error) {
//             if (error) throw error;
//             console.log("Updated stock quantity of " + chosenproduct.product_name);
//             search();
//         }

//     )
//  }
//         })
//     })


// }
function addnewproduct() {
    inquirer.prompt([
        {
            type: "input",
            name: "productname",
            message: "What product would you like to add? "
        },
        {
            type: "input",
            name: "departmentname",
            message: "What deptartment it belongs?"
        },
        {
            type: "input",
            name: "price",
            message: "Price of the product?"
        },
        {
            type: "input",
            name: "stockquantity",
            message: "Quantity of the product?"
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO products SET? ",

            {
                product_name: answer.productname,
                department_name: answer.departmentname,
                price: answer.price,
                stock_quantity: answer.stockquantity
            },
            function (error) {
                if (error) throw error;
                console.log("The new product is added.")
                search();
            }
        )

    })


}



