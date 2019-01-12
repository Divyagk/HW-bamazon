DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2),
stock_quantity INTEGER(10),
product_sales DECIMAL(10,2),
PRIMARY KEY(item_id )
);

INSERT INTO products(product_name,department_name,price,stock_quantity,product_sales)
VALUES("The Killer Collective","Books",5,100,20000),
("The Snow Gypsy","Books",4.99,75,32000),
("Becoming","books",31,500,42000),
("Mod Podge","Crafting",4.88,30,15000),
("Ventincre Colored Masking Washi Tape","Crafting",9.73,2,50000),
("Hot Glue Gun","Crafting",6,50,30000),
("Saucepan","Home & Kitchen",15.47,3,12000),
("Pressure Cooker","Home & Kitchen",42.67,4,43000),
("Square Grill Pan","Home & Kitchen",35,80,15000),
("Craft Wok","Home & Kitchen",50.95,150,20000);
SELECT * FROM products;

CREATE TABLE departments(
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(100) NOT NULL,
over_head_costs DECIMAL(10,2),
PRIMARY KEY(department_id)
);
INSERT INTO departments(department_name,over_head_costs)
VALUES("Home & kitchen",43000),
("Furniture",34000),
("Books",52000),
("Crafts",16000),
("Sports & Outdoors",65000),
("Clothing",55000),
("kid",31000),
("Entertaiment",45000),
("Electronics",38900),
("Lights",35000);
SELECT * FROM departments;
 
 SELECT 
    departments.department_id,
    departments.department_name,
    departments.over_head_costs,
    products.product_sales,
    departments.over_head_costs-products.product_sales total_profit
    
FROM
    departments
        LEFT JOIN
    products ON products.item_id = departments.department_id;
