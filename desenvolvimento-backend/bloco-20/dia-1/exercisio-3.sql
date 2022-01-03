USE PecasFornecedores;

/*
Escreva uma query para exibir todas as peças que começam com GR .
Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.
Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
*/


SELECT NAME FROM Pecas WHERE NAME LIKE 'Gr%';
SELECT Fornecimentos.peca, Fornecedores.name FROM Fornecimentos, Fornecedores WHERE Fornecimentos.peca = 2 AND Fornecimentos.Fornecedor = Fornecedores.code ORDER BY Fornecedores.name;
SELECT Pecas.name, Fornecimentos.Preco, Fornecedores.name FROM Pecas, Fornecimentos, Fornecedores WHERE Fornecedores.code LIKE '%N%' AND Pecas.code = Fornecimentos.peca AND Fornecedores.code = Fornecimentos.Fornecedor;
SELECT NAME FROM Fornecedores WHERE NAME REGEXP 'LTDA' ORDER BY NAME DESC;
SELECT COUNT(NAME) FROM Fornecedores WHERE NAME REGEXP 'F';
SELECT Fornecedores.name, Fornecimentos.Preco  FROM Fornecedores, Fornecimentos WHERE Fornecedores.code = Fornecimentos.Fornecedor AND Fornecimentos.Preco BETWEEN 15 AND 40 ORDER BY Fornecimentos.Preco ASC;
SELECT ORDER_DATE FROM Vendas WHERE ORDER_DATE BETWEEN '2018-04-15' AND '2019-07-30';
