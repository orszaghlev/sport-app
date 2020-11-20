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
(12001,'Arizona Cardinals','ARI','18980101',2325000000,'USD','https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Arizona_Cardinals_logo.svg/100px-Arizona_Cardinals_logo.svg.png','State Farm Stadium'),
(12002,'Atlanta Falcons','ATL','19650630',2600000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/100px-Atlanta_Falcons_logo.svg.png','Mercedes-Benz Stadium'),
(12003,'Baltimore Ravens','BAL','19960209',2980000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/100px-Baltimore_Ravens_logo.svg.png','M&T Bank Stadium'),
(12004,'Buffalo Bills','BUF','19591028',2150000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/100px-Buffalo_Bills_logo.svg.png','Bills Stadium'),
(12005,'Carolina Panthers','CAR','19931026',2300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Carolina_Panthers_logo.svg/100px-Carolina_Panthers_logo.svg.png','Bank of America Stadium'),
(12006,'Chicago Bears','CHI','19200917',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/100px-Chicago_Bears_logo.svg.png','Soldier Field'),
(12007,'Cincinnati Bengals','CIN','19670523',2000000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/100px-Cincinnati_Bengals_logo.svg.png','Paul Brown Stadium'),
(12008,'Cleveland Browns','CLE','19440604',2350000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Cleveland_Browns_logo.svg/100px-Cleveland_Browns_logo.svg.png','FirstEnergy Stadium'),
(12009,'Dallas Cowboys','DAL','19600128',5500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Dallas_Cowboys.svg/100px-Dallas_Cowboys.svg.png','AT&T Stadium'),
(12010,'Denver Broncos','DEN','19590814',3200000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Denver_Broncos_logo.svg/100px-Denver_Broncos_logo.svg.png','Empower Field at Mile High'),
(12011,'Detroit Lions','DET','19300712',1950000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Detroit_Lions_logo.svg/100px-Detroit_Lions_logo.svg.png','Ford Field'),
(12012,'Green Bay Packers','GB','19190811',2630000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/100px-Green_Bay_Packers_logo.svg.png','Lambeau Field'),
(12013,'Houston Texans','HOU','19991006',3300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Texans_logo.svg/100px-Houston_Texans_logo.svg.png','NRG Stadium'),
(12014,'Indianapolis Colts','IND','19530123',2850000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/100px-Indianapolis_Colts_logo.svg.png','Lucas Oil Stadium'),
(12015,'Jacksonville Jaguars','JAX','19931130',2080000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Jacksonville_Jaguars_logo.svg/100px-Jacksonville_Jaguars_logo.svg.png','TIAA Bank Field'),
(12016,'Kansas City Chiefs','KC','19590814',3000000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/100px-Kansas_City_Chiefs_logo.svg.png','Arrowhead Stadium'),
(12017,'Las Vegas Raiders','LV','19600130',3100000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Las_Vegas_Raiders_logo.svg/100px-Las_Vegas_Raiders_logo.svg.png','Allegiant Stadium'),
(12018,'Los Angeles Chargers','LAC','19590814',2600000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Los_Angeles_Chargers_logo.svg/100px-Los_Angeles_Chargers_logo.svg.png','SoFi Stadium'),
(12019,'Los Angeles Rams','LA','19360101',2900000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Los_Angeles_Rams_logo.svg/100px-Los_Angeles_Rams_logo.svg.png','SoFi Stadium'),
(12020,'Miami Dolphins','MIA','19650816',2900000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Miami_Dolphins_logo.svg/100px-Miami_Dolphins_logo.svg.png','Hard Rock Stadium'),
(12021,'Minnesota Vikings','MIN','19600128',2400000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Minnesota_Vikings_logo.svg/98px-Minnesota_Vikings_logo.svg.png','U.S. Bank Stadium'),
(12022,'New England Patriots','NE','19591116',4400000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/100px-New_England_Patriots_logo.svg.png','Gilette Stadium'),
(12023,'New Orleans Saints','NO','19661101',2280000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/New_Orleans_Saints_logo.svg/98px-New_Orleans_Saints_logo.svg.png','Mercedes-Benz Superdome'),
(12024,'New York Giants','NYG','19250801',3200000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/100px-New_York_Giants_logo.svg.png','MetLife Stadium'),
(12025,'New York Jets','NYJ','19590814',3550000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/100px-New_York_Jets_logo.svg.png','MetLife Stadium'),
(12026,'Philadelphia Eagles','PHI','19330708',2750000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Philadelphia_Eagles_logo.svg/100px-Philadelphia_Eagles_logo.svg.png','Lincoln Financial Field'),
(12027,'Pittsburgh Steelers','PIT','19330708',3000000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Pittsburgh_Steelers_logo.svg/100px-Pittsburgh_Steelers_logo.svg.png','Heinz Field'),
(12028,'San Francisco 49ers','SF','19440604',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/100px-San_Francisco_49ers_logo.svg.png','Levi´s Stadium'),
(12029,'Seattle Seahawks','SEA','19740604',2780000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/100px-Seattle_Seahawks_logo.svg.png','CenturyLink Field'),
(12030,'Tampa Bay Buccaneers','TB','19740424',2300000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tampa_Bay_Buccaneers_logo.svg/100px-Tampa_Bay_Buccaneers_logo.svg.png','Raymond James Stadium'),
(12031,'Tennessee Titans','TEN','19590803',2050000000,'USD', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Tennessee_Titans_logo.svg/100px-Tennessee_Titans_logo.svg.png','Nissan Stadium'),
(12032,'Washington Football Team','WAS','19320709',3500000000,'USD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Washington_football_team_wlogo.svg/100px-Washington_football_team_wlogo.svg.png','FedExField'),
(13001,'Los Angeles Lakers','LAL','19470101',4400000000,'USD','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png','Staples Center'),
(13002,'Miami Heat','MIA','19880101',1900000000,'USD','https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/200px-Miami_Heat_logo.svg.png','American Airlines Arena'),
(14001,'HC Meshkov Brest','MES','20020101',0,'EUR','https://upload.wikimedia.org/wikipedia/be-x-old/f/fc/BHK_imia_Mia%C5%A1kova.png','Universal Sports Complex Victoria'),
(14002,'MOL-Pick Szeged','SZE','19611216',0,'EUR','https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/SC_Pick_Szeged.svg/125px-SC_Pick_Szeged.svg.png','Újszegedi Sportcsarnok'),
(15001,'Dallas Stars','DAL','19670101',600000000,'USD','https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Dallas_Stars_logo_%282013%29.svg/220px-Dallas_Stars_logo_%282013%29.svg.png','American Airlines Center'),
(15002,'Tampa Bay Lightning','TB','19920101',470000000,'USD','https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Tampa_Bay_Lightning_Logo_2011.svg/220px-Tampa_Bay_Lightning_Logo_2011.svg.png','Amalie Arena');


INSERT INTO competitions.competition VALUES
(21001,'Europe','Football','European Championship Qualification','https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/UEFA_Euro_2016_qualifying.png/220px-UEFA_Euro_2016_qualifying.png'),
(22001,'USA','American football','NFL','https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/188px-National_Football_League_logo.svg.png'),
(23001,'USA','Basketball','NBA','https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/105px-National_Basketball_Association_logo.svg.png'),
(24001,'Europe','Handball','EHF Champions League','https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/EHF_Champions_League_Logo_2020.svg/220px-EHF_Champions_League_Logo_2020.svg.png'),
(25001,'USA','Ice hockey','NHL','https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/190px-05_NHL_Shield.svg.png');

INSERT INTO competitions.season VALUES
(31001,21001,'20190321','20201112'),
(32001,22001,'20200911','20210207'),
(33001,23001,'20200212','20201012'),
(34001,24001,'20200911','20210614'),
(35001,25001,'20200205','20200929');


INSERT INTO competitions.in_season VALUES
(31001,11001),
(31001,11002),
(32001,12001),
(32001,12002),
(32001,12003),
(32001,12004),
(32001,12005),
(32001,12006),
(32001,12007),
(32001,12008),
(32001,12009),
(32001,12010),
(32001,12011),
(32001,12012),
(32001,12013),
(32001,12014),
(32001,12015),
(32001,12016),
(32001,12017),
(32001,12018),
(32001,12019),
(32001,12020),
(32001,12021),
(32001,12022),
(32001,12023),
(32001,12024),
(32001,12025),
(32001,12026),
(32001,12027),
(32001,12028),
(32001,12029),
(32001,12030),
(32001,12031),
(32001,12032),
(33001,13001),
(33001,13002),
(34001,14001),
(34001,14002),
(35001,15001),
(35001,15002);



INSERT INTO competitions.match VALUES
(41001,31001,11002,11001,1,3,'Vasil Lecski National Stadium','20201008'),
(42001,32001,12004,12016,17,26,'Bills Stadium','20201019'),
(42002,32001,12024,12030,23,25,'MetLife Stadium','20201103'),
(42003,32001,12003,12027,24,28,'M&T Bank Stadium','20201101'),
(42004,32001,12020,12019,28,17,'Hard Rock Stadium','20201101'),
(42005,32001,12016,12025,35,9,'Arrowhead Stadium','20201101'),
(42006,32001,12012,12021,22,28,'Lambeau Field','20201101'),
(42007,32001,12011,12014,21,41,'Ford Field','20201101'),
(42008,32001,12008,12017,6,16,'FirstEnergy Stadium','20201101'),
(42009,32001,12007,12031,31,20,'Paul Brown Stadium','20201101'),
(42010,32001,12004,12022,24,21,'Bills Stadium','20201101'),
(42011,32001,12010,12018,31,30,'Empower Field at Mile High','20201101'),
(42012,32001,12029,12028,37,27,'CenturyLink Field','20201101'),
(42013,32001,12006,12023,23,26,'Soldier Field','20201101'),
(42014,32001,12026,12009,23,9,'Lincoln Financial Field','20201102'),
(42015,32001,12005,12002,17,25,'Bank of America Stadium','20201030'),
(43001,33001,13002,13001,93,106,'The Arena','20201012'),
(44001,34001,14001,14002,26,24,'Dvorech sporta Viktoria','20201022'),
(45001,35001,15001,15002,0,2,'Rogers Place','20200929');


INSERT INTO competitions.am_football_matchstats values
(42001,2,3,1,2,0,0,0,0,206,466,122,221,84,245,4.1,6.4,0,2,1,0,4,2,'22:15','37:45',4,8,39,68),
(42002,3,2,1,4,0,0,0,0,357,344,256,263,101,81,5.2,5.2,0,2,2,0,4,3,'29:50','30:10',7,3,73,20),
(42003,3,4,1,0,0,0,0,0,457,221,192,173,265,48,5.8,4.4,4,3,2,0,3,6,'35:22','24:38',9,3,110,30),
(42004,4,2,0,1,0,0,0,0,145,471,90,340,55,131,3.0,5.1,2,3,0,2,9,6,'23:30','36:30',3,5,30,45),
(42005,5,0,0,3,0,0,0,0,496,221,446,128,50,93,7.4,3.9,2,1,0,0,3,5,'31:30','28:30',7,3,61,25),
(42006,3,4,0,0,0,0,1,0,400,324,291,151,109,173,6.1,6.6,1,0,0,0,1,3,'32:12','27:48',9,7,85,36),
(42007,3,6,0,0,0,0,0,1,326,366,297,247,29,119,5.4,4.9,3,1,1,0,5,5,'22:14','37:46',4,3,76,19),
(42008,0,1,2,3,0,0,0,0,223,309,122,100,101,208,4.7,4.4,1,1,0,0,2,1,'22:17','37:43',7,5,59,25),
(42009,4,3,1,0,0,0,0,0,367,441,249,223,118,218,5.3,7.3,1,0,0,1,3,2,'35:57','24:03',7,7,45,68),
(42010,3,2,1,2,0,0,0,1,339,349,149,161,190,188,5.9,5.7,0,1,1,0,3,4,'29:14','30:46',5,5,30,35),
(42011,4,3,1,3,0,0,0,0,351,485,243,275,108,210,5.9,5.8,0,0,1,2,6,3,'24:07','35:53',8,6,70,67),
(42012,5,4,1,0,0,0,0,0,350,351,249,299,101,52,5.2,5.3,0,3,0,1,4,4,'30:58','29:02',6,6,30,36),
(42013,2,2,3,4,0,0,0,0,329,394,233,272,96,122,4.8,5.5,0,3,1,0,4,4,'33:09','35:15',7,5,53,45),
(42014,3,0,0,3,0,0,1,0,222,265,103,132,119,133,3.8,3.4,3,3,2,0,2,3,'27:10','32:50',4,7,28,68),
(42015,2,2,1,4,0,0,0,0,304,401,157,270,147,131,5.8,5.9,0,0,1,1,2,1,'23:30','36:30',6,6,30,63);


INSERT INTO competitions.football_matchstats values
(41001,11,9,5,4,8,4,3,2,46,54,82,79,412,485,338,385,0,2,0,0,12,17);


INSERT INTO competitions.basketball_matchstats values
(43001,13,9,25,32,10,11,35,43,41,46,13,12,4,5,4,4,18,23,6,4);


INSERT INTO competitions.handball_matchstats values
(44001,65,60,1,2,6,3,1,5,11,9,4,3,1,3,5,5,4,8,4,2,2,0,1,4,3,3);


INSERT INTO competitions.hockey_matchstats values
(45001,22,29,0,1,0,0,27,31,16,22,5,5,11,9,6,6);