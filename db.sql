-- to create a new database
CREATE DATABASE clientes;

-- to use database
use clientes;

-- creating a new table dentro el database clientes
CREATE TABLE customer (
 id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- intero max 6 cifre, no numero valori negativi, autoincrementabile, valori unici
 name VARCHAR(50) NOT NULL, -- string di max 50 caratteri, non valori nulli
 address VARCHAR(100) NOT NULL, -- string di max 100 caratteri, non valori nulli
 phone VARCHAR(15) -- string di max 15 caratteri , in generale per i numeri di telefono si preferiscono le lettere pittosto che i numeri
);

-- to show all tables
show tables;

-- to describe table
describe customer;
