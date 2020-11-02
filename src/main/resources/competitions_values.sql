INSERT INTO competitions.competition VALUES
	(1, 'Europe', 'Football', 'European Championship Qualification', 'https://i.imgur.com/7LLh0gq.png'),
    (2, 'USA', 'American Football', 'NFL', 'https://i.imgur.com/olU8XDF.png');

INSERT INTO competitions.team VALUES
	(1, 'Hungary', 'HUN', '20201008', 49390000, 'USD', 'https://i.imgur.com/TDxvAAO.jpg', 'Puskas Arena'),
    (2, 'Bulgaria', 'BGR', '20201008', 25520000, 'USD', 'https://i.imgur.com/AdchOe3.jpg', 'Vasil Levski National Stadium'),
	(3, 'Kansas City Chiefs', 'KC', '19580814', 2500000000, 'USD', 'https://i.imgur.com/nbItqC4.png', 'Arrowhead Stadium'),
    (4, 'Buffalo Bills', 'BUF', '19591028', 2050000000, 'USD', 'https://i.imgur.com/IkDk3Ph.jpg', 'Bills Stadium');
    
INSERT INTO competitions.season VALUES
	(1, 1, '20190321', '20201112'),
	(2, 2, '20200911', '20210207');

INSERT INTO competitions.in_season VALUES
	(1, 1),
    (1, 2),
    (2, 3),
    (2, 4);
    
INSERT INTO competitions.match VALUES
	(1, 1, 2, 1, 1, 3, 'Vasil Levski National Stadium', '20201008'),
    (2, 2, 4, 3, 17, 26, 'Bills Stadium', '20201019');