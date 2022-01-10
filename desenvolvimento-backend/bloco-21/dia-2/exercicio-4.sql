SELECT 
  m.title, 
  SUM(b.domestic_sales), 
  SUM(b.international_sales)
FROM Pixar.BoxOffice as b
INNER JOIN Pixar.Movies as m
ON m.id = b.movie_id
GROUP BY m.title;

SELECT 
  m.title, 
  SUM(b.domestic_sales) as domestic, 
  SUM(b.international_sales) as international
FROM Pixar.BoxOffice as b
INNER JOIN Pixar.Movies as m
ON m.id = b.movie_id
GROUP BY m.title
HAVING international > domestic;

SELECT
  m.title,
  b.rating
FROM Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

SELECT 
  t.*,
  m.*
FROM Pixar.Theater as t
LEFT JOIN Pixar.Movies as m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT 
  m.*,
  t.*
FROM Pixar.Theater as t
RIGHT JOIN Pixar.Movies as m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT 
  m.*,
  b.rating as rate
FROM Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b
ON m.id = b.movie_id
HAVING rate > 8;









