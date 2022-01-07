(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.staff);

(SELECT CONCAT(first_name, ' ', last_name) as nome
FROM sakila.actor
HAVING nome LIKE '%tracy%')
UNION
(SELECT CONCAT(first_name, ' ', last_name) as nome
FROM sakila.customer
HAVING nome LIKE '%je%');

(SELECT CONCAT(first_name, ' ', last_name) as nome
FROM sakila.actor
ORDER BY nome DESC
LIMIT 5)
UNION
(SELECT CONCAT(first_name, ' ', last_name) as nome
FROM sakila.staff
ORDER BY nome
LIMIT 1)
UNION
(SELECT CONCAT(first_name, ' ', last_name) as nome
FROM sakila.customer
ORDER BY nome
LIMIT 5 OFFSET 15);

(SELECT CONCAT(first_name, ' ', last_name) as nome 
FROM sakila.actor)
UNION
(SELECT CONCAT(first_name, ' ', last_name) as nome 
FROM sakila.customer)
ORDER BY nome
LIMIT 15 OFFSET 60;
