-- create a database qnd make sure you always terminate or end your command or query with a semi-colon(;)
CREATE DATABASE userAuth;

-- delete a database
-- DROP DATABASE userAuth;

-- selecting/using/activating a database
USE userAuth;

-- create a table
CREATE TABLE signUp(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL ,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL
);

-- updating a table
INSERT INTO signUp(name,email,password)
VALUE("Loveth","amehlove147@gmil.com","love12345"),
("Mr_Ubani","ubani@gmil.com","ubani12345"),
("David","david@gmil.com","dav12345");

-- view your table
SELECT * FROM signUp;

-- viewing individual column
SELECT id,name,password FROM signUp;

-- updating record in a table
UPDATE signUp SET name = "Love" WHERE id = 1;
UPDATE signUP SET password = "carebear" WHERE id = 1;

-- deleting record from table
DELETE FROM signup WHERE id = 4; 
DELETE FROM signup WHERE id = 5; 
DELETE FROM signup WHERE id = 6; 

-- filtering data in a table
SELECT * FROM signUp WHERE name = "Mr_ubani";

-- sort data from a table
SELECT * FROM signup ORDER BY name ASC;
SELECT * FROM signup ORDER BY name DESC;

