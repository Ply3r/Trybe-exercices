USE Pixar;
SET SQL_SAFE_UPDATES = 0;

INSERT INTO Pixar.Movies(title, director, `year`, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('Toy Story 2', 'John Lasseter', 1999, 93),
('WALL-E', 'Pete Docter', 2008, 104);

UPDATE Pixar.Movies SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
(9, 7.4, 460000000, 510000000),
(10, 9.9, 290000000, 280000000);

UPDATE Pixar.BoxOffice SET rating = 6.8, 
domestic_sales = 450000000,
international_sales = 370000000
WHERE movie_id = 9;

UPDATE Pixar.Movies SET 
title = 'Ratatouille',
year = 2007
WHERE title = 'ratatui';

DELETE FROM Pixar.Movies WHERE title = 'WALL-E';
DELETE FROM Pixar.Movies WHERE director = 'Andrew Staton';

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
