CREATE DATABASE theCurve;
USE  theCurve;
CREATE TABLE theCurveStudents(
id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
departments_id INT(50)  NOT NULL
);
INSERT INTO theCurveStudents(id,name,email,departments_id)
VALUES(1,"Loveth", "amehlove147@gmail.com",1),
(2,"David","david@gmail.com",2),
( 3,"prosper","prosper@gmail.com",2),
( 4,"Vivi","viv@gmail.com",1) ,
(5,"Mr_Ubani","ubani@gmail.com",2);

-- SELECT * FROM theCurveStudents;


CREATE TABLE departments(
id INT PRIMARY KEY,
department_name VARCHAR(50)
);

INSERT  INTO departments(id, department_name)
VALUES(1,"Frontend"),
(2,"Backend");

-- SELECT * FROM theCurveStudents;
-- SELECT * FROM departments;

SELECT theCurveStudents.id, theCurveStudents.name, departments.department_name FROM theCurveStudents
INNER JOIN departments ON theCurveStudents.departments_id = departments.id;