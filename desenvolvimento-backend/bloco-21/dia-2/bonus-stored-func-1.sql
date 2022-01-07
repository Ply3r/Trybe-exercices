USE sakila;
DELIMITER $$
CREATE FUNCTION `totalPayment`(customer_id INT) 
RETURNS int READS SQL DATA
BEGIN
  DECLARE total INT;
  SELECT
    SUM(amount) INTO total
    FROM sakila.payment as p
    WHERE customer_id = p.customer_id;
  RETURN total;
END$$
DELIMITER ;
