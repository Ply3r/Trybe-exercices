USE sakila;
DELIMITER $$
CREATE DEFINER=`Leandro`@`localhost` PROCEDURE `ShowTop10Actors`()
BEGIN
  SELECT 
    actor.actor_id, 
    CONCAT(actor.first_name, ' ', actor.last_name) as nome,
    ( SELECT 
        COUNT(film_id) 
        FROM sakila.film_actor as filmAct
        WHERE filmAct.actor_id = actor.actor_id
        GROUP BY actor.actor_id
    ) as movie_quantity
    FROM sakila.actor as actor;
END$$
DELIMITER ;
