USE sakila;

SELECT ROUND(AVG(rental_duration), 2) AS 'Média de Duração' FROM sakila.film;
SELECT MIN(rental_duration) AS 'Duração Mínima' FROM sakila.film;
SELECT MAX(rental_duration) AS 'Duração Máxima' FROM sakila.film;
SELECT SUM(rental_duration) AS 'Tempo de exibição total' FROM sakila.film;
SELECT COUNT(rental_duration) AS 'Filmes Registrados' FROM sakila.film;