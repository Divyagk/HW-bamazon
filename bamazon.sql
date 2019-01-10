DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;
CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2),
stock_quantity INTEGER(10),
PRIMARY KEY(item_id )
);

INSERT INTO products(product_name,department_name,price,stock_quantity)
VALUES("The Killer Collective","Books",5,100),
("The Snow Gypsy","Books",4.99,75),
("Becoming","books",31,500),
("Mod Podge","Crafting",4.88,30),
("Ventincre Colored Masking Washi Tape","Crafting",9.73,2),
("Hot Glue Gun","Crafting",6,50),
("Saucepan","Home & Kitchen",15.47,3),
("Pressure Cooker","Home & Kitchen",42.67,4),
("Square Grill Pan","Home & Kitchen",35,80),
("Craft Wok","Home & Kitchen",50.95,150);
SELECT * FROM products;

CREATE TABLE departments(
department_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(100) NOT NULL,
over_head_costs DECIMAL(10,2),
PRIMARY KEY(department_id)
);
INSERT INTO departments(department_name,over_head_costs)
VALUES("Home & kitchen",),
("Furniture",),
("Books",),
("Crafts",),
("
