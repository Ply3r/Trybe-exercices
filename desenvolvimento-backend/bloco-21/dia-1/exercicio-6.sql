SELECT rating, AVG(length) AS film_length
FROM sakila.film
GROUP BY rating
HAVING film_length BETWEEN 115 AND 120;
    
SELECT rating, SUM(replacement_cost) AS total
FROM sakila.film
GROUP by rating
HAVING total > 3000
ORDER BY total;