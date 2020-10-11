CREATE DATABASE  IF NOT EXISTS `users`;
USE `users`;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(250) NOT NULL,
  `last_name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `user` VALUES 
	(1,'Geza','Pelda','gezapelda@gmail.com'),
	(2,'Aladar','Minta','aladarminta@gmail.com');
