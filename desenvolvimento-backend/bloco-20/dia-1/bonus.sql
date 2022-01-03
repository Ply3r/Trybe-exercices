USE PiecesProviders;
/*
Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
Escreva uma query para exibir por quantas empresas a peça 1 é provida.
*/

SELECT Pieces.Name, Provides.Price FROM Pieces, Provides WHERE Pieces.Code = Provides.Piece AND Provides.Provider = 'RBT' ORDER BY Provides.Price DESC;
SELECT Pieces.Name, Providers.Name, Provides.Price FROM Provides, Pieces, Providers WHERE Provides.Piece = Pieces.Code AND Provides.Provider = Providers.Code ORDER BY Provides.Price DESC;
SELECT Providers.Name, Provides.Price FROM Provides, Providers WHERE Providers.Code = Provides.Provider ORDER BY Provides.Price DESC LIMIT 4 OFFSET 3;
SELECT Provides.Piece, Pieces.Name, Provides.Provider, Provides.Price FROM Pieces, Provides WHERE Pieces.Code = Provides.Piece AND Provides.Provider = 'HAL' ORDER BY Provides.Price DESC;
SELECT COUNT(Provides.Provider) FROM Provides WHERE Provides.Piece = 1;
