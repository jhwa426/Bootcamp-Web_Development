--Q01
SELECT restID, "$" || sum(prodPrice) AS "Total Price"
FROM product
GROUP BY restID;

-- SELECT prodNo, prodName, sum(prodPrice)
-- FROM Product
-- GROUP BY prodNo, prodName

--Q02
SELECT prodPrice, group_concat(prodName, ",")
FROM Product
GROUP BY prodPrice;

--Q03
SELECT prodNo, group_concat(optionDesc, ",")
FROM Option
GROUP BY prodNo;

--Q04
SELECT prodNo,  sum(price), AVG(price)
FROM option
GROUP BY prodNo;

--Q05
SELECT orderNo, CAST(min(julianday('now') - julianday(orderDateTime)) AS INT) AS "Number of Days Since Last Order"
FROM  CustOrder;

--Q06
SELECT CAST(AVG( julianday(endDateTime) - julianday(startDateTime)) AS INT)  || " days" AS "Average Special Length"
FROM  ProductSpecial;

--Q07
SELECT C.customerID, C.firstName, C.lastName, CO.orderNo
FROM Customer C, CustOrder CO;

--Q08
SELECT C.customerID, C.firstName, C.lastName, CO.orderNo
FROM Customer C JOIN CustOrder CO ON c.customerID = co.customerID;

--Q09
SELECT R.reviewNo,  RT.reviewTypeID, R.reviewStar ,RT.reviewTypeDesc
FROM Review R JOIN ReviewType RT ON R.reviewTypeID = RT.reviewTypeID
WHERE R.reviewTypeID = RT.reviewTypeID;

--Q10
SELECT C.prodNo, C.prodName, C.prodParentNo
FROM Product C, Product P
WHERE C.prodParentNo = P.prodNo

--Q11
SELECT E.empID, E.empFirstName, E.empLastName, IFNULL(orderNo, 'None')
FROM Employee E LEFT OUTER JOIN CustOrder CO ON E.empID = CO.empID

--Q12
SELECT substr(email, instr(email, "@")) AS 'Provider', COUNT(email) AS 'Count'
FROM Customer
GROUP BY substr(email, instr(email, "@"))
