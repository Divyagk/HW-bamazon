# Bamazon

The goal was to create an Amazon-like storefront using Node.js and MySQL.


<h3>Technologies Used:</h3>

1. Node.js

2. MySQL

<h3>Dependencies:</h3>

npm install mysql

npm install inquirer

<h3>Built With</h3>

MySQLWorkbench & Mamp


<h3>Working example:</h3>

<h4>1.BamazonCustomer.js<h4>

<p>Prints the products in the store.</p>

<p>Prompts customer which product they would like to purchase by ID number.</P>

<p>Asks for the quantity.</p>

<p>If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department table.</p> 


![customer](./images/screenshot.PNG)


<h4>2.BamazonManager.js <h4>

<p>Starts with a menu:</p>

<p>View Products for Sale,View Low Inventory,Add to Inventory,Add New Product</p>

<p>If the manager selects View Products for Sale, it lists all of the products in the store including all of their details.</p>

<p>If the manager selects View Low Inventory, it'll list all the products with less than five items in its StockQuantity column.</p>

<p>If the manager selects Add to Inventory, it allows the manager to select a product and add inventory.</p>

<p>If the manager selects Add New Product, it allows the manager to add a new product to the store.</p>



![manager](./images/screenshot1.PNG)

<h4>3.BamazonSupervisor.js<h4>

<p>Starts with a menu:</p>

<p>View Product Sales by Department,Create New Department</p>

<p>If the manager selects View Product Sales by Department, it lists the Department Sales and calculates the total sales from the overhead cost and product sales.</p>

<p>If the manager selects Create New Department, it allows the manager to create a new department and input current overhead costs and product sales. If there are none, by default it will set at 0.</p>


![supervisor](./images/screenshot2.PNG)