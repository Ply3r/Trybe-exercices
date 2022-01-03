SELECT 
IF(active = 1, 'ativos', 'não ativos') AS 'ativos',
COUNT(*) AS 'quantidade'
FROM sakila.customer GROUP BY `active`;

SELECT
store_id,
IF(active = 1, 'active', 'not active') AS 'CONDITION',
COUNT(*) AS 'quantity'
FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id;

SELECT 
rating,
ROUND(AVG(rental_duration), 2) AS 'Average duration'
FROM sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;

SELECT
district,
COUNT(*) AS 'address quantity'
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;
