/*Creacion de la base de datos*/
CREATE DATABASE firstapi;

/*Creacion de la tabla para usuarios*/
CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    name VARCHAR(30),
    email TEXT
);

/*Insertando valores en la tabla users*/
INSERT INTO users (name, email) VALUES
    ('Primax', 'Primax2001@gmail.com'),
    ('ZoeLeagueOfLegends', 'ZoeFakeEmail@gmail.com');