USE Scientists;

/*
Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.
Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.
Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1 .
Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A .
Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H .
*/

SELECT * FROM Scientists WHERE Name REGEXP 'e';
SELECT NAME FROM Projects WHERE NAME LIKE 'A%' ORDER BY NAME;
SELECT CODE, NAME FROM Projects WHERE CODE REGEXP '3';
SELECT COUNT(Scientist) FROM AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');
SELECT * FROM Projects WHERE Hours > 500;
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
SELECT Name, Code FROM Projects WHERE Code NOT LIKE 'a%';
SELECT NAME FROM Projects WHERE CODE REGEXP 'h';
