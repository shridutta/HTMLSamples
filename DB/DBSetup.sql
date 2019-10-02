Create DATABASE AgriFoods; 

create table users(
    userId int not null primary key auto_increment,
    userName varchar(50) not null unique,
    email varchar(200) not null unique,
    
)