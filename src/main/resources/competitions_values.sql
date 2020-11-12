/*
x.... table
    1 = TEAM
    2 = COMPETITION
    3 = SEASON
    4 = MATCH
    5 = 
    6 = 
    7 = 

.x... sport
    1 = football
    2 = american football
    3 = basketball
    4 = handball
    5 = hockey
*/

INSERT INTO competitions.team VALUES
(11001,'Hungary','HUN','19010101',72200000,'EUR','https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Hungarian_Football_Federation_logo.svg/200px-Hungarian_Football_Federation_logo.svg.png','Puskas Arena'),
(11002,'Bulgaria','BGR','19230101',23200000,'EUR','https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Bulgarian_Football_Union_logo.svg/150px-Bulgarian_Football_Union_logo.svg.png','Vasil Lecski National Stadium'),
(12003,'Kansas City Chiefs','KC','19590814',3000000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/100px-Kansas_City_Chiefs_logo.svg.png','Arrowhead Stadium'),
(12004,'Buffalo Bills','BUF','19591028',2150000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/100px-Buffalo_Bills_logo.svg.png','Bills Stadium'),
(12005,'Arizona Cardinals','ARI','18980101',2325000000,'USD','https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Arizona_Cardinals_logo.svg/100px-Arizona_Cardinals_logo.svg.png','State Farm Stadium'),
(12006,'Atlanta Falcons','ATL','19650630',2600000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/100px-Atlanta_Falcons_logo.svg.png','Mercedes-Benz Stadium'),
(12007,'Baltimore Ravens','BAL','19960209',2980000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/100px-Baltimore_Ravens_logo.svg.png','M&T Bank Stadium'),
(12008,'Carolina Panthers','CAR','19931026',2300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Carolina_Panthers_logo.svg/100px-Carolina_Panthers_logo.svg.png','Bank of America Stadium'),
(12009,'Chicago Bears','CHI','19200917',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/100px-Chicago_Bears_logo.svg.png','Soldier Field'),
(12010,'Cincinnati Bengals','CIN','19670523',2000000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/100px-Cincinnati_Bengals_logo.svg.png','Paul Brown Stadium'),
(12011,'Cleveland Browns','CLE','19440604',2350000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Cleveland_Browns_logo.svg/100px-Cleveland_Browns_logo.svg.png','FirstEnergy Stadium'),
(12012,'Dallas Cowboys','DAL','19600128',5500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/100px-Dallas_Cowboys.svg.png','AT&T Stadium'),
(12013,'Denver Broncos','DEN','19590814',3200000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/100px-Denver_Broncos_logo.svg.png','Empower Field at Mile High'),
(12014,'Detroit Lions','DET','19300712',1950000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Detroit_Lions_logo.svg/100px-Detroit_Lions_logo.svg.png','Ford Field'),
(12015,'Green Bay Packers','GB','19190811',2630000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/100px-Green_Bay_Packers_logo.svg.png','Lambeau Field'),
(12016,'Houston Texans','HOU','19991006',3300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Texans_logo.svg/100px-Houston_Texans_logo.svg.png','NRG Stadium'),
(12017,'Indianapolis Colts','IND','19530123',2850000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/100px-Indianapolis_Colts_logo.svg.png','Lucas Oil Stadium'),
(12018,'Jacksonville Jaguars','JAX','19931130',2080000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Jacksonville_Jaguars_logo.svg/100px-Jacksonville_Jaguars_logo.svg.png','TIAA Bank Field'),
(12019,'Las Vegas Raiders','LV','19600130',3100000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Las_Vegas_Raiders_logo.svg/100px-Las_Vegas_Raiders_logo.svg.png','Allegiant Stadium'),
(12020,'Los Angeles Chargers','LAC','19590814',2600000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Los_Angeles_Chargers_logo.svg/100px-Los_Angeles_Chargers_logo.svg.png','SoFi Stadium'),
(12021,'Los Angeles Rams','LA','19360101',2900000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Los_Angeles_Rams_logo.svg/100px-Los_Angeles_Rams_logo.svg.png','SoFi Stadium'),
(12022,'Miami Dolphins','MIA','19650816',2900000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Miami_Dolphins_logo.svg/100px-Miami_Dolphins_logo.svg.png','Hard Rock Stadium'),
(12023,'Minnesota Vikings','MIN','19600128',2400000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Minnesota_Vikings_logo.svg/98px-Minnesota_Vikings_logo.svg.png','U.S. Bank Stadium'),
(12024,'New England Patriots','NE','19591116',4400000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/100px-New_England_Patriots_logo.svg.png','Gilette Stadium'),
(12025,'New Orleans Saints','NO','19661101',2280000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/98px-New_Orleans_Saints_logo.svg.png','Mercedes-Benz Superdome'),
(12026,'New York Giants','NYG','19250801',3200000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/100px-New_York_Giants_logo.svg.png','MetLife Stadium'),
(12027,'New York Jets','NYJ','19590814',3550000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/100px-New_York_Jets_logo.svg.png','MetLife Stadium'),
(12028,'Philadelphia Eagles','PHI','19330708',2750000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/100px-Philadelphia_Eagles_logo.svg.png','Lincoln Financial Field'),
(12029,'Pittsburgh Steelers','PIT','19330708',3000000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/100px-Pittsburgh_Steelers_logo.svg.png','Heinz Field'),
(12030,'San Francisco 49ers','SF','19440604',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/100px-San_Francisco_49ers_logo.svg.png','Levi´s Stadium'),
(12031,'Seattle Seahawks','SEA','19740604',2780000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/100px-Seattle_Seahawks_logo.svg.png','CenturyLink Field'),
(12032,'Tampa Bay Buccaneers','TB','19740424',2300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tampa_Bay_Buccaneers_logo.svg/100px-Tampa_Bay_Buccaneers_logo.svg.png','Raymond James Stadium'),
(12033,'Tennessee Titans','TEN','19590803',2050000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Tennessee_Titans_logo.svg/100px-Tennessee_Titans_logo.svg.png','Nissan Stadium'),
(12034,'Washington Football Team','WAS','19320709',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Washington_football_team_wlogo.svg/100px-Washington_football_team_wlogo.svg.png','FedExField');


INSERT INTO competitions.competition VALUES
(21001,'Europe','Football','European Championship Qualification','https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png'),
(22002,'USA','American Football','NFL','https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/188px-National_Football_League_logo.svg.png');


INSERT INTO competitions.season VALUES
(31001,21001,'20190321','20201112'),
(32002,22002,'20200911','20210207');


INSERT INTO competitions.in_season VALUES
(31001,11001),
(31001,11002),
(32002,12003),
(32002,12004),
(32002,12005),
(32002,12006),
(32002,12007),
(32002,12008),
(32002,12009),
(32002,12010),
(32002,12011),
(32002,12012),
(32002,12013),
(32002,12014),
(32002,12015),
(32002,12016),
(32002,12017),
(32002,12018),
(32002,12019),
(32002,12020),
(32002,12021),
(32002,12022),
(32002,12023),
(32002,12024),
(32002,12025),
(32002,12026),
(32002,12027),
(32002,12028),
(32002,12029),
(32002,12030),
(32002,12031),
(32002,12032),
(32002,12033),
(32002,12034);


INSERT INTO competitions.match VALUES
(41001,31001,11002,11001,1,3,'Vasil Lecski National Stadium','20201008'),
(42002,32002,12004,12003,17,26,'Bills Stadium','20201019'),
(42003,32002,12026,12032,23,25,'MetLife Stadium','20201103'),
(42004,32002,12007,12029,24,28,'M&T Bank Stadium','20201101'),
(42005,32002,12022,12020,28,17,'Hard Rock Stadium','20201101'),
(42006,32002,12003,12027,35,9,'Arrowhead Stadium','20201101'),
(42007,32002,12015,12023,22,28,'Lambeau Field','20201101'),
(42008,32002,12014,12017,21,41,'Ford Field','20201101'),
(42009,32002,12011,12019,6,16,'FirstEnergy Stadium','20201101'),
(42010,32002,12010,12033,31,20,'Paul Brown Stadium','20201101'),
(42011,32002,12004,12024,24,21,'Bills Stadium','20201101'),
(42012,32002,12013,12020,31,30,'Empower Field at Mile High','20201101'),
(42013,32002,12031,12030,37,27,'CenturyLink Field','20201101'),
(42014,32002,12009,12025,23,26,'Soldier Field','20201101'),
(42015,32002,12028,12012,23,9,'Lincoln Financial Field','20201102'),
(42016,32002,12008,12006,17,25,'Bank of America Stadium','20201030');
