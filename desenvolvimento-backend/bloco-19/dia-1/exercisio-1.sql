DROP SCHEMA IF EXISTS exercisio_1;
CREATE DATABASE exercisio_1;
USE exercisio_1;


CREATE TABLE filmes(
    filmes_id INT NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,
    ano_lancamento INT NOT NULL,
    nota INT NOT NULL,
    PRIMARY KEY (filmes_id)
);

INSERT INTO filmes (filmes_id, descricao, ano_lancamento, nota)
VALUES (1, 'top', 2021, 10);

DESCRIBE filmes;
