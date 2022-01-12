DROP SCHEMA IF EXISTS Heros;
CREATE SCHEMA Heros;
USE Heros;

CREATE TABLE creator (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL
);

CREATE TABLE universe (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE liga (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  universe_id INT NOT NULL,
  FOREIGN KEY (universe_id) REFERENCES universe (id)
);

CREATE TABLE Hero (
  hero_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  liga_id INT NOT NULL,
  creator_id INT NOT NULL,
  FOREIGN KEY (liga_id) REFERENCES liga (id),
  FOREIGN KEY (creator_id) REFERENCES creator (id)
);
