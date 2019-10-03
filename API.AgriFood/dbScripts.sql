Create DATABASE AgriFoods;

DROP TABLE users;
CREATE TABLE users (
    userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifyDate DATETIME DEFAULT NULL,
    isActive INT DEFAULT 0    
);


use agrifoods;
insert into users(username, email, password, isactive)
values('shridutta', 'shridutta@hotmail.com', 'Welcome123', 1);
insert into users(username, email, password, isactive)
values('nitinrajput', 'nitinrajput@GMail.com', 'Nitin123', 1);
insert into users(username, email, password, isactive)
values('jasmin', 'jasmin@Gmail.com', 'Nitin123', 1);
select * from users;


-- CREATE TABLE IF NOT EXISTS `customer` (
--   `Id` int(11) NOT NULL AUTO_INCREMENT,
--   `Name` varchar(255) NOT NULL,
--   `Address` varchar(255) NOT NULL,
--   `Country` varchar(100) NOT NULL,
--   `Phone` int(10) NOT NULL,x
--   `Created_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `Updated_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (`Id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
