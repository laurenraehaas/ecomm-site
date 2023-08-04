-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id {
        type: INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    }
    category_name {
        type: STRING NOT NULL,
    }
),

CREATE TABLE Products (
    id {
        type: INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    }
    product_name {
        type: STRING NOT NULL,
    } 
    price {
        type: DECIMAL NOT NULL VALIDATE,
    } 
    stock {
        type: INT NOT NULL DEFAULT '10' VALIDATE,
    } 
    category_id {
        type: INT,
        references: {
            
        }
    }
),

CREATE TABLE Tag (
    id {
        type: INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    }
    tag_name {
        type: STRING,
    }
),

CREATE TABLE ProductTag (
    id {
        type 
    }
)
