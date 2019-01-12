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

<h4>BamazonCustomer.js<h4>

<p>Prints the products in the store.</p>

<p>Prompts customer which product they would like to purchase by ID number.</P>

<p>Asks for the quantity.</p>

<p>If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department table.</p>


![customer](./images/screenshot.PNG)

<h4>BamazonManager.js <h4>

![manager](./images/screenshot1.PNG)

<h4>BamazonSupervisor.js<h4>

![supervisor](./images/screenshot2.PNG)