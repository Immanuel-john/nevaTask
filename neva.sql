-- to create database:
   
   create database 'neva'

-- to create table needed:

    CREATE TABLE `neva`.`users` ( `email` VARCHAR(50) NOT NULL , `password` VARCHAR(30) NOT NULL ) ENGINE = InnoDB;
    

    CREATE TABLE `neva`.`hi` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(30) NOT NULL , `datetime` VARCHAR(50) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;