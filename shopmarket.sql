CREATE DATABASE shopmarket;
USE shopmarket;

CREATE TABLE orders(
order_id INT PRIMARY KEY,
order_date DATE  NOT NULL
);
INSERT INTO orders(order_id, order_date)
VALUES( 404,1/8/2023),
(300,21/8/2023),
(444,25/8/2023),
(122,21/9/2023),
(414,27/9/2023);

SELECT * FROM orders;

CREATE TABLE orders_item(

order_item_id INT PRIMARY KEY, 
order_id INT,
product_name VARCHAR(50) NOT NULL,
quantity INT NOT NULL,
price INT NOT NULL
);
INSERT INTO orders_item(order_item_id, order_id, product_name, quantity, price)
VALUES( 1, 202, "candy", 2, 200) ,
( 2, 300, "sweets", 25, 100) ,
(3, 122, "doll", 12, 300) ,
(4, 300, "sweets", 25, 500) ,
( 5, 404, "biscuits", 25, 700) ,
(6, 122, "doll", 12, 300) ,
(7, 300, "sweets", 25, 800) ;


SELECT * FROM orders_item;

-- SELECT SUM(quantity)
-- FROM orders_item;

-- SELECT AVG(price)
-- FROM orders_item;

SELECT product_name,  SUM(quantity) AS totalQuantity, AVG(price) AS average
FROM orders
INNER JOIN orders_item ON orders.order_id = orders_item.order_id
GROUP BY product_name 
ORDER BY product_name;

-- SELECT orders.order_id,orders.order_date, orders_item.order_item_id,  orders_item.product_name,orders_item.quantity,orders_item.price FROM orders





