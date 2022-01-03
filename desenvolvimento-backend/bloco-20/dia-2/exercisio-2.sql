USE sakila;
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
UPDATE sakila.category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
UPDATE sakila.film SET replacement_cost = 25 WHERE length > 100 AND replacement_cost > 20 AND rating IN('G', 'PG', 'PG-13');
UPDATE sakila.film SET replacement_cost = (
  CASE
    WHEN length BETWEEN 1 AND 100 THEN 10
    WHEN length > 100 THEN 20
  END
);


SELECT * FROM sakila.film LIMIT 15;