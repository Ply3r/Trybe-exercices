USE sakila;
DELIMITER $$
CREATE DEFINER=`Leandro`@`localhost` FUNCTION `getTitleByInventoryID`(inventory_id INT) RETURNS varchar(100) CHARSET utf8mb4
    READS SQL DATA
BEGIN
  DECLARE title VARCHAR(100);
  SELECT
    f.title
    FROM sakila.film as f
    INNER JOIN sakila.inventory as i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = inventory_id
    INTO title;
  RETURN title;
END$$
DELIMITER ;
