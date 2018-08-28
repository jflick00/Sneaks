DROP DATABASE IF EXISTS sneaks_DB;
CREATE DATABASE sneaks_DB;

USE sneaks_DB;

CREATE TABLE user (
	user_id INT(30) NOT NULL auto_increment,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    create_date DATE,
    privacy BOOLEAN,
    logged_in BOOLEAN,
    PRIMARY KEY(user_id)
);
	CREATE TABLE shoe (
	shoe_id INT(30) NOT NULL auto_increment,
    brand VARCHAR(30),
    gender VARCHAR(20),
    category VARCHAR(20),
    primary_color VARCHAR(30),
    style_number VARCHAR(30),
    PRIMARY KEY(shoe_id)
);
CREATE TABLE posts (
	post_id INT NOT NULL auto_increment,
    user_id INT(30),
    shoe_id INT(30),
	FOREIGN KEY (user_id) references user(user_id),
    FOREIGN KEY (shoe_id) references shoe(shoe_id),
    PRIMARY KEY (post_id),
    add_date Date
);

CREATE TABLE reviews (
	review_id INT NOT NULL auto_increment,
    user_id  INT NOT NULL,
    shoe_id  INT NOT NULL,
    rating INT,
    is_rated BOOLEAN,
    FOREIGN KEY (user_id) references user(user_id),
    FOREIGN KEY (shoe_id) references shoe(shoe_id),
    primary key(review_id)
)