USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER atualizaDataDeAtualizacao
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'UPDATE';
END $$
DELIMITER ;