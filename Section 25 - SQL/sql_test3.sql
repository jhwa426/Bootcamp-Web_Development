--Q01
SELECT L1.ingrName, L2.ingrName
FROM Ingredient L1, Ingredient L2

--Q02
CREATE VIEW 'Review Stars' AS
SELECT reviewDesc AS 'Review Description',
CASE reviewStar
WHEN 5 THEN '*****'
WHEN 4 THEN '****'
WHEN 3 THEN '***'
WHEN 2 THEN '**'
WHEN 1 THEN '*'
END 'Stars'
FROM Review;

--EX
SELECT *
FROM Review Stars;


--Q03
CREATE TRIGGER validate_email
BEFORE INSERT ON Customer
BEGIN
	SELECT
	CASE
	WHEN NEW.email NOT LIKE '%_%@_%._%' THEN
	RAISE(ABORT 'Invalid email Address')
	END;
END;

--no error
INSERT INTO Customer(email, firstName, lastName, gender, birthDate, contactNumber, password)
VALUES('jhwa426@aucklanduni.ac.nz', 'Jeff', 'Hwang', 'M', '1995-04-11', '021022', 'password')

--error occur
INSERT INTO Customer(email, firstName, lastName, gender, birthDate, contactNumber, password)
VALUES('jhwa426@', 'Jeff', 'Hwang', 'M', '1995-04-11', '021022', 'password')

--Q04
SELECT at.addressTypeDesc, group_concat(c.firstName || '' || c.lastName || '('||a.suburb ||','||a.postalCode||')',',') AS 'Customer'
FROM Address a
JOIN AddressType at ON a.addressTypeID = a.addressTypeID
JOIN Customer c ON a.customerID = c.customerID
GROUP BY at.addressTypeID

--Q05
SELECT e.empFirstName, '$' || ot.OrderTotal AS 'order total'
FROM (
SELECT e.empID, sum(op.quantity * p.prodPrice) AS 'OrderTotal'
FROM Employee e, CustOrder co, Product p, OrderProduct op
WHERE e.empID = co.empID AND co.orderNo = op.orderNo AND op.prodNo = p.prodNo
GROUP BY co.orderNo) ot, Employee e
WHERE e.empID = ot.empID
GROUP BY e.empID

--Q06
SELECT a.suburb AS 'Suburb', sum(op.quantity * p.prodPrice) AS 'Total spent'
FROM OrderProduct op, Address a, CustOrder co, Product p
ON op.orderNo = co.orderNo AND a.customerID = co.customerID AND op.prodNo = p.prodNo
GROUP BY a.suburb
ORDER BY sum(op.quantity * p.prodPrice) DESC;


--Q07
SELECT empFirstName AS 'Employee',
	CASE
	WHEN endDate > DATE('now')
	OR endDate IS NULL
	THEN 'Active'
	ELSE 'Inactive'
	END AS 'Status'
FROM Employee