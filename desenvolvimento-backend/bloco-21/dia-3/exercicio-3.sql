DROP SCHEMA IF EXISTS Residentes;
CREATE SCHEMA Residentes;
USE Residentes;

CREATE TABLE Cidade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(50) NOT NULL
);

CREATE TABLE Estado (
  id INT AUTO_INCREMENT PRIMARY KEY,
  state VARCHAR(50) NOT NULL
);

CREATE TABLE Endereco (
  location_id INT AUTO_INCREMENT PRIMARY KEY,
  street VARCHAR(100) NOT NULL,
  number INT NOT NULL,
  city_id INT NOT NULL,
  state_id INT NOT NULL,
  FOREIGN KEY (city_id) REFERENCES Cidade (id),
  FOREIGN KEY (state_id) REFERENCES Estado (id)
);

CREATE TABLE Locador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Residencia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  locador_id INT NOT NULL,
  endereco_id INT NOT NULL,
  FOREIGN KEY (locador_id) REFERENCES Locador (id),
  FOREIGN KEY (endereco_id) REFERENCES Endereco (location_id)
);

CREATE TABLE Inquilino (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  residencia_id INT NOT NULL,
  FOREIGN KEY (residencia_id) REFERENCES Residencia (id)
);