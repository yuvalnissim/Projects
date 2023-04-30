CREATE DATABASE db;
CREATE TABLE users(
    id PRIMARY KEY,
    fname,
    lname,
    email,
    uname UNIQUE,
    pwd
);
