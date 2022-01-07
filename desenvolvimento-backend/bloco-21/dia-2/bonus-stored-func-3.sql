USE sakila;
DELIMITER $$;

CREATE FUNCTION getTotalFilmsByCategory(category VARCHAR(50))
RETURNS INT READS SQL DATA;
BEGIN
  DECLARE result VARCHAR(50);
  SELECT COUNT(f.film_id)
    FROM sakila.film_category as f
    INNER JOIN sakila.category as c
    ON f.category_id = c.category_id
    WHERE c.name = category;
END $$
DELIMITER ;