DROP SCHEMA IF EXISTS Movies;
CREATE SCHEMA Movies;
USE Movies;

CREATE TABLE Genre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Film (
  film_id INT AUTO_INCREMENT PRIMARY KEY,
  film_name VARCHAR(50) NOT NULL,
  genre_id INT NOT NULL,
  valor DOUBLE NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES Genre (id)
);
