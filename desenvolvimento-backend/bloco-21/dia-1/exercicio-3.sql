SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') as 'Par ou Impar';
SELECT 220 DIV 12;
SELECT IF(220 MOD 12 > 0, 'Temos lugares sobrando', 'não temos lugares sobrando');

SELECT ROUND(15 + RAND() * 5);
SELECT ROUND(15.7515971 ,5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

SELECT DATEDIFF('2030-01-20', CURRENT_DATE()) AS 'dias restando';
SELECT TIMEDIFF('10:25:45', '11:00:00') AS 'minutos restantes';