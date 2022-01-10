DROP SCHEMA IF EXISTS Funcionarios;
CREATE SCHEMA Funcionarios;

USE Funcionarios;

CREATE TABLE Setor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Funcionario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(50) NOT NULL,
  Sobrenome VARCHAR(50) NOT NULL,
  DataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  Setor_id INT NOT NULL,
  FOREIGN KEY (Setor_id) REFERENCES Setor (id)
);

CREATE TABLE Contato (
  funcionario_id INTEGER NOT NULL,
  email VARCHAR(50) NOT NULL,
  celular VARCHAR(50) NOT NULL,
  FOREIGN KEY (funcionario_id) REFERENCES Funcionario (id)
);

INSERT INTO Setor (name)
VALUES ('Programador');

INSERT INTO Funcionario (Nome, Sobrenome, Setor_id)
VALUES ('Leandro', 'Henrique', 1);
