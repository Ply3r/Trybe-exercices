USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER atualizaDataDeAdicao
AFTER INSERT ON carros
FOR EACH ROW
BEGIN
  INSERT INTO carros(data_atualizacao, acao)
  VALUES (NOW(), 'ATUALIZAÇÃO');
END $$
DELIMITER ;