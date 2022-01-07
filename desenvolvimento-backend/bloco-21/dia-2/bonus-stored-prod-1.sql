USE sakila;
DELIMITER $$
CREATE PROCEDURE `CheckClientActivityByEmail`(IN clientEmail VARCHAR(100), OUT clientActive VARCHAR(50))
BEGIN
  SELECT
    IF (active = 1, 'Active', 'Not active') as 'client active' INTO clientActive
    FROM sakila.customer
    WHERE email = clientEmail;
END$$
DELIMITER ;
