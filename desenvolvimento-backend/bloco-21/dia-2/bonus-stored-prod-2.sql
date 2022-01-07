USE sakila;
DELIMITER $$
CREATE DEFINER=`Leandro`@`localhost` PROCEDURE `GetFilmByName`(IN filmName VARCHAR(50))
BEGIN
  SELECT
    film_id,
    title,
    (
      SELECT category_id
      FROM sakila.film_category as category
      WHERE film.film_id = category_id
    ) as category_id,
    (
      SELECT name
      FROM sakila.category as category
      WHERE ( 
              SELECT category_id as id 
              FROM sakila.film_category
              HAVING id = category.category_id
            )
    ) as name
    FROM sakila.film as film
    WHERE title = filmName;
END$$
DELIMITER ;
