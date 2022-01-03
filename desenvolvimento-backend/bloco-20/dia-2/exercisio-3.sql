USE sakila;
SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';
DELETE FROM sakila.film_actor WHERE actor_id = 8 OR actor_id = 103 OR actor_id = 181;
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_text WHERE description REGEXP 'saga';
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

SELECT film_id, description FROM sakila.film_text WHERE description REGEXP 'saga';