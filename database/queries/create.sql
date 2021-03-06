CREATE TABLE `USER` (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(60) NOT NULL, 
	`password` VARCHAR(50) NOT NULL,
	timesVisited INT NOT NULL
);

CREATE TABLE `TESTSET` (
    title VARCHAR(20) NOT NULL PRIMARY KEY,
	content TEXT NOT NULL  
);

CREATE TABLE `TRAINSET` (
    title VARCHAR(20) NOT NULL PRIMARY KEY,
	content TEXT NOT NULL  
);

CREATE TABLE `PARAMETER_FILE` (
    title VARCHAR(20) NOT NULL PRIMARY KEY,
	content TEXT NOT NULL  
);

CREATE TABLE `LOGFILE` (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `datetime` DATETIME NOT NULL, 
    parameter_id VARCHAR(20) NOT NULL,
    trainset_id VARCHAR(20) NOT NULL,
    testset_id VARCHAR(20) NOT NULL
);

CREATE TABLE `model` (
  `id` bigint(20)  NOT NULL AUTO_INCREMENT Primary Key,
  `title` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `t` (
  `id` bigint(20) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;



