USE sakila;

DROP TABLE IF EXISTS novaTabela;
CREATE TABLE novaTabela (
  Staff_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  First_name varchar(40) NOT NULL,
  Last_name varchar(40) NOT NULL
);

INSERT INTO novaTabela(First_name, Last_name)
VALUES ('Leandro', 'Henrique'),
('Miguel','Henrique');

INSERT INTO novaTabela(First_name, Last_name)
SELECT first_name, last_name FROM sakila.actor WHERE first_name REGEXP '^[LM].*';

SELECT * FROM sakila.novaTabela;
