DROP SCHEMA IF EXISTS CatalogoDeAlbuns;
CREATE SCHEMA CatalogoDeAlbuns;
USE CatalogoDeAlbuns;

CREATE TABLE Artist (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE EstiloMusical (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Album (
  album_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  preco DOUBLE NOT NULL,
  artist_id INTEGER,
  estilo_id INTEGER,
  FOREIGN KEY (artist_id) REFERENCES Artist (id),
  FOREIGN KEY (estilo_id) REFERENCES EstiloMusical (id)
);

CREATE TABLE Cancao (
  id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  album_id INTEGER,
  FOREIGN KEY (album_id) REFERENCES Album (album_id)
);

INSERT INTO Artist (name)
VALUES ('Leandro');

INSERT INTO EstiloMusical (name)
VALUES ('Eletronica');

INSERT INTO Album (title, preco, artist_id, estilo_id)
VALUES ('Leandro Hit', 17.90, 1, 1);

SELECT 
  album.title, 
  album.preco,
  artist.name as artist,
  (
    SELECT  
      e.name 
      FROM CatalogoDeAlbuns.EstiloMusical as e
      WHERE e.id = album.estilo_id
  ) as estilo
FROM CatalogoDeAlbuns.Album as album
INNER JOIN  CatalogoDeAlbuns.Artist as artist
ON artist.id = album.artist_id;







