SELECT act.ACTOR_ID, 
act.FIRST_NAME, 
film.FILM_ID FROM sakila.actor as act 
INNER JOIN sakila.film_actor AS film 
ON act.actor_id = film.actor_id;

SELECT 
staff.first_name, 
staff.last_name, 
adr.address 
FROM sakila.staff as staff
INNER JOIN sakila.address as adr
ON staff.address_id = adr.address_id;

SELECT 
cust.customer_id, 
cust.first_name, 
cust.email, 
adr.address_id, 
adr.address
FROM sakila.customer as cust
INNER JOIN sakila.address as adr
ON adr.address_id = cust.address_id
ORDER BY cust.first_name DESC LIMIT 100;

SELECT 
cust.first_name, 
cust.email, 
adr.address_id, 
adr.address,
adr.district
FROM sakila.customer as cust
INNER JOIN sakila.address as adr
ON adr.address_id = cust.address_id
WHERE cust.first_name LIKE '%rene%' AND 
adr.district = 'California';

SELECT
cust.first_name,
COUNT(adr.address)
FROM sakila.customer as cust
INNER JOIN sakila.address as adr
ON cust.address_id = adr.address_id
WHERE cust.active = 1
GROUP BY cust.first_name;

SELECT
staff.first_name,
staff.last_name,
ROUND(AVG(pay.amount), 2)
FROM sakila.staff as staff
INNER JOIN sakila.payment as pay
ON staff.staff_id = pay.staff_id
GROUP BY staff.first_name, staff.last_name;

SELECT
act.actor_id,
act.first_name,
film.film_id,
film.title
FROM sakila.actor as act
INNER JOIN sakila.film_actor as filmAct
INNER JOIN sakila.film as film
ON act.actor_id = filmAct.actor_id 
AND filmAct.film_id = film.film_id;

