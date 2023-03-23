-- This is a example of SQLite script

-- Question 1.
SELECT firstName, gender
FROM Customer
ORDER BY firstName;

-- Question 2.
SELECT UPPER(lastName) || ", " || firstName, gender
FROM Customer
ORDER BY lastName;

-- Question 3.
SELECT prodNo AS "Product number", prodName AS "Product Name", prodPrice AS "Product Price",  prodPrice/1.15 
AS "Product price excl GST" FROM Product
ORDER BY prodPrice;

-- Question 4.
SELECT reviewDate, reviewStar, reviewDesc
FROM Review
WHERE reviewStar % 2 == 0;

-- Question 5.
SELECT reviewDate, reviewStar, reviewDesc
FROM Review
WHERE reviewDesc LIKE "%cheese.";

-- Question 6.
SELECT *
FROM Product
WHERE prodName LIKE "_a%" 
OR prodName LIKE "_e%" 
OR prodName LIKE "_i%" 
OR prodName LIKE "_o%" 
OR prodName LIKE "_u%";

-- Question 7.
SELECT 'The price for an '||prodName||' pizza is $'||prodPrice 
FROM Product 
WHERE prodName = "Agilo";

-- Question 8.
SELECT DISTINCT suburb 
FROM Address
WHERE suburb LIKE "% %"

-- Question 9.
SELECT ingrName 
FROM Ingredient
ORDER BY ingrName
LIMIT 3;

-- Question 10.
SELECT ingrName 
FROM Ingredient
ORDER BY ingrName
LIMIT 3
OFFSET 3;

-- Question 11.
SELECT restName AS "Restaurant Name", IFNULL(restEmail, "No Email") AS "Email"
FROM Restaurant;

-- Question 12.
CREATE TABLE [Recipe] (
    [prodNo] INTEGER NOT NULL,
    [ingrNo] INTEGER NOT NULL,
	[unitRequired] NUMERIC(10, 2) NOT NULL,
	CONSTRAINT Recipe_pk PRIMARY KEY([prodNo], [ingrNo]),
	CONSTRAINT Recipe_fk1 FOREIGN KEY([prodNo]) REFERENCES Product([prodNo]),
	CONSTRAINT Recipe_fk2 FOREIGN KEY([ingrNo]) REFERENCES Ingredient([ingrNo])
);

-- Question 13.
INSERT INTO Customer (email, firstName, lastName, gender, birthDate, contactNumber, password)
VALUES ('jdav523@aucklanduni.ac.nz', 'Jono', 'Davis', 'M', '1999-02-05', '123456789', 'mypasswd');

-- Question 14.
UPDATE Customer
SET contactNumber = '987654321'
WHERE customerID = 11;

-- Question 15.
SELECT empFirstName AS 'Employee',
CAST((JULIANDAY('now') - JULIANDAY(startDate)) / 365.25 AS INT) || ' Year(s) ' || 
CAST(((JULIANDAY('now') - JULIANDAY(startDate)) % 365.25) / 30.44 AS INT) || ' Month(s)'
AS 'Time Since Hire'
FROM Employee
ORDER BY JULIANDAY('now') - JULIANDAY(startDate) DESC;