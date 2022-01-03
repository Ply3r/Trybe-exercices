SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.BoxOffice SET rating = (
  CASE
    WHEN domestic_sales > 400000000 THEN 9.0
    WHEN international_sales < 300000000 
    AND domestic_sales > 200000000 THEN 6.0
    ELSE rating
  END
);

SELECT id FROM Pixar.Movies WHERE length_minutes < 100;
DELETE FROM Pixar.BoxOffice;
DELETE FROM Pixar.Movies WHERE length_minutes < 100;


SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
