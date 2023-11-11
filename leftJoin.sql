CREATE DATABASE employees;
USE employees;

CREATE TABLE employeeDetails(
id INT PRIMARY KEY,
firstName VARCHAR(50) NOT NULL,
lastName VARCHAR(50) NOT NULL,
salary INT(50) NOT NULL
);

INSERT INTO employeeDetails(id,firstName,lastName,salary)
VALUES(1, "ubani", "friday", 10000),
(2, "colin", "decorce", 7000),
(1, "joshua", "aninku", 6000);

 -- SELECT * FROM employee_details;
 
 CREATE TABLE departments(
 id INT AUTO_INCREMENT PRIMARY KEY,
 deptName VARCHAR(50) NOT NULL
 );
 INSERT INTO departments(id, deptName)
 VALUES("sales"),
 ("deptName");
 
 SELECT * FROM deprtments