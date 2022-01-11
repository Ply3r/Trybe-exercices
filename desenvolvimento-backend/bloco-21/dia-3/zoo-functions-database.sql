DROP SCHEMA IF EXISTS ZooFunction;
CREATE SCHEMA ZooFunction;
USE ZooFunction;

CREATE TABLE Especie (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Cidade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Estado (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE Localizacao (
  location_id INT AUTO_INCREMENT PRIMARY KEY,
  city_id INT NOT NULL,
  state_id INT NOT NULL,
  FOREIGN KEY (city_id) REFERENCES Cidade (id),
  FOREIGN KEY (state_id) REFERENCES Estado (id)
);

CREATE TABLE Empregados (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age MEDIUMINT NOT NULL,
  salary DOUBLE NOT NULL,
  manager_id INT NOT NULL,
  hire_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (manager_id) REFERENCES Empregados (employee_id)
);

CREATE TABLE Animal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  specie_id INT,
  sex VARCHAR(6) NOT NULL,
  age MEDIUMINT NOT NULL,
  location_id INT,
  employee_id INT,
  FOREIGN KEY (specie_id) REFERENCES Especie (id),
  FOREIGN KEY (location_id) REFERENCES Localizacao (location_id)
);











