USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';
SELECT Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT 10 + 5;
SELECT 5 + 2 * 3 + 10;
SELECT * FROM Scientists;
SELECT Name, Hours FROM Projects;
SELECT Name FROM Scientists ORDER BY Name;
SELECT Name FROM Scientists ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluido') FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas') FROM Scientists;