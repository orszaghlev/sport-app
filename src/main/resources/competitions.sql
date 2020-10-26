-- MySQL Script generated by MySQL Workbench
-- Wed Oct 21 16:24:31 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema competitions
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema competitions
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `competitions` DEFAULT CHARACTER SET utf8 ;
USE `competitions` ;

-- -----------------------------------------------------
-- Table `competitions`.`ATHLETE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`ATHLETE` (
  `id` VARCHAR(6) NOT NULL,
  `name` VARCHAR(250) NOT NULL,
  `date_of_birth` DATE,
  `value` INT,
  `value_currency` VARCHAR(20),
  `position` VARCHAR(250),
  `nationaity` VARCHAR(250),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`TEAM`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`TEAM` (
  `id` VARCHAR(6) NOT NULL,
  `full_name` VARCHAR(250) NOT NULL,
  `short_name` VARCHAR(5) NOT NULL,
  `founding_date` DATE,
  `team_value` INT,
  `value_currency` VARCHAR(20),
  `image_link` VARCHAR(250),
  `home_place` VARCHAR(250),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`PLAYS_IN`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`PLAYS_IN` (
  `athlete_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `jersey_number` INT,
  `start_of_contract` DATE NOT NULL,
  `end_of_contract` DATE,
  PRIMARY KEY (`athlete_id`, `team_id`, `start_of_contract`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `pi_athlete_id`
    FOREIGN KEY (`athlete_id`)
    REFERENCES `competitions`.`ATHLETE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pi_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`STAFF`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`STAFF` (
  `id` VARCHAR(6) NOT NULL,
  `name` VARCHAR(250),
  `work` VARCHAR(250),
  `date_of_birth` DATE,
  `nationalitiy` VARCHAR(250),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`WORKS_IN`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`WORKS_IN` (
  `staff_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `start_of_contract` DATE NOT NULL,
  `end_of_contract` DATE,
  PRIMARY KEY (`staff_id`, `team_id`, `start_of_contract`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `wi_staff_id`
    FOREIGN KEY (`staff_id`)
    REFERENCES `competitions`.`STAFF` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `wi_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`COMPETITION`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`COMPETITION` (
  `id` VARCHAR(6) NOT NULL,
  `region` VARCHAR(250),
  `sport_type` VARCHAR(250),
  `name` VARCHAR(250),
  `logo_link` VARCHAR(250),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`SEASON`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`SEASON` (
  `id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `competition_id` VARCHAR(6) NOT NULL,
  `started` DATE,
  `finished` DATE,
  PRIMARY KEY (`id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  INDEX `competition_id_idx` (`competition_id` ASC) VISIBLE,
  CONSTRAINT `se_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `se_competition_id`
    FOREIGN KEY (`competition_id`)
    REFERENCES `competitions`.`COMPETITION` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`MATCH`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`MATCH` (
  `id` VARCHAR(6) NOT NULL,
  `season_id` VARCHAR(6),
  `home_team` VARCHAR(6) NOT NULL,
  `away_team` VARCHAR(6) NOT NULL,
  `home_score` INT,
  `away_score` INT,
  `place` VARCHAR(250),
  `date` DATE,
  PRIMARY KEY (`id`),
  INDEX `season_id_idx` (`season_id` ASC) VISIBLE,
  INDEX `home_team_idx` (`home_team` ASC) VISIBLE,
  INDEX `away_team_idx` (`away_team` ASC) VISIBLE,
  CONSTRAINT `ma_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ma_home_team`
    FOREIGN KEY (`home_team`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ma_away_team`
    FOREIGN KEY (`away_team`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`PLAYED_MATCH`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`PLAYED_MATCH` (
  `athlete_id` VARCHAR(6) NOT NULL,
  `match_id` VARCHAR(6) NOT NULL,
  `time_played` DATETIME,
  `playing_started` DATETIME,
  PRIMARY KEY (`athlete_id`, `match_id`),
  INDEX `match_id_idx` (`match_id` ASC) VISIBLE,
  CONSTRAINT `pm_athlete_id`
    FOREIGN KEY (`athlete_id`)
    REFERENCES `competitions`.`ATHLETE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pm_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`EVENT_TYPES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`EVENT_TYPES` (
  `id` VARCHAR(6) NOT NULL,
  `type` VARCHAR(250),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`EVENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`EVENT` (
  `athlete_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `match_id` VARCHAR(6) NOT NULL,
  `event_type` VARCHAR(6) NOT NULL,
  `time` INT NOT NULL,
  PRIMARY KEY (`athlete_id`, `team_id`, `match_id`, `time`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  INDEX `match_id_idx` (`match_id` ASC) VISIBLE,
  INDEX `event_type_idx` (`event_type` ASC) VISIBLE,
  CONSTRAINT `ev_athlete_id`
    FOREIGN KEY (`athlete_id`)
    REFERENCES `competitions`.`ATHLETE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ev_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ev_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ev_event_type`
    FOREIGN KEY (`event_type`)
    REFERENCES `competitions`.`EVENT_TYPES` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`AM_FOOTBALL_MATCHSTSAT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`AM_FOOTBALL_MATCHSTSAT` (
  `match_id` VARCHAR(6) NOT NULL,
  `h_touchdowns` INT,
  `a_touchdowns` INT,
  `h_field_goals` INT,
  `a_field_goals` INT,
  `h_extra_point` INT,
  `a_extra_point` INT,
  `h_two_point` INT,
  `a_two_point` INT,
  `h_total_yards` INT,
  `a_total_yards` INT,
  `h_passing_yards` INT,
  `a_passing_yards` INT,
  `h_rushing_yards` INT,
  `a_rushing_yards` INT,
  `h_avg_yrds_per_play` DECIMAL,
  `a_avg_yrds_per_play` DECIMAL,
  `h_fumbles` INT,
  `a_fumbles` INT,
  `h_interceptions` INT,
  `a_interceptions` INT,
  `h_punts` INT,
  `a_punts` INT,
  `h_time_of_possession` DATETIME,
  `a_time_of_possession` DATETIME,
  `h_penalties` INT,
  `a_penalties` INT,
  `h_yards_penalized` INT,
  `a_yards_penalized` INT,
  PRIMARY KEY (`match_id`),
  CONSTRAINT `afstat_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`HANDBALL_MATCHSTSAT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`HANDBALL_MATCHSTSAT` (
  `id` VARCHAR(6) NOT NULL,
  `h_shooting_efficiency` DECIMAL,
  `a_shooting_efficiency` DECIMAL,
  `h_wing_goals` INT,
  `a_wing_goals` INT,
  `h_fastbreak_goals` INT,
  `a_fastbreak_goals` INT,
  `h_seven_meters` INT,
  `a_seven_meters` INT,
  `h_saves` INT,
  `a_saves` INT,
  `h_two_min_penalty` INT,
  `a_two_min_penalty` INT,	
  `h_yellow_cards` INT,
  `a_yellow_cards` INT,
  `h_goal_streak` INT,
  `a_goal_streak` INT,
  `h_goals_in_powerplay` INT,
  `a_goals_in_powerplay` INT,
  `h_shorthanded_goals` INT,
  `a_shorthanded_goals` INT,
  `h_steals` INT,
  `a_steals` INT,
  `h_technical_faults` INT,
  `a_technical_faults` INT,
  `h_timeouts` INT,
  `a_timeouts` INT,
  PRIMARY KEY (`id`),
  CONSTRAINT `hastat_match_id`
    FOREIGN KEY (`id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`FOOTBALL_MATCHSTSAT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`FOOTBALL_MATCHSTSAT` (
  `match_id` VARCHAR(6) NOT NULL,
  `h_attempts` INT,
  `a_attempts` INT,
  `h_on_target` INT,
  `a_on_target` INT,
  `h_corners` INT,
  `a_corners` INT,
  `h_offsides` INT,
  `a_offsides` INT,
  `h_possession` DECIMAL,
  `a_possession` DECIMAL,
  `h_passing_accuracy` DECIMAL,
  `a_passing_accuracy` DECIMAL,
  `h_passes` INT,
  `a_passes` INT,
  `h_passes_completed` INT,
  `a_passes_completed` INT,
  `h_yellow` INT,
  `a_yellow` INT,
  `h_red` INT,
  `a_red` INT,
  `h_fouls` INT,
  `a_fouls` INT,
  PRIMARY KEY (`match_id`),
  CONSTRAINT `fstat_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`BASKETBALL_MATCHSTSAT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`BASKETBALL_MATCHSTSAT` (
  `match_id` VARCHAR(6) NOT NULL,
  `h_free_throws` INT,
  `a_free_throws` INT,
  `h_two_pointers` INT,
  `a_two_pointers` INT,
  `h_three_pointers` INT,
  `a_three_pointers` INT,
  `h_field_goals` INT,
  `a_field_goals` INT,
  `h_rebounds` INT,
  `a_rebounds` INT,
  `h_turnovers` INT,
  `a_turnovers` INT,
  `h_steals` INT,
  `a_steals` INT,
  `h_blocks` INT,
  `a_blocks` INT,
  `h_fouls` INT,
  `a_fouls` INT,
  `h_timeouts` INT,
  `a_timeouts` INT,
  PRIMARY KEY (`match_id`),
  CONSTRAINT `bstat_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`HOCKEY_MATCHSTSAT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`HOCKEY_MATCHSTSAT` (
  `match_id` VARCHAR(6) NOT NULL,
  `h_shots` INT,
  `a_shots` INT,
  `h_goals_in_powerplay` INT,
  `a_goals_in_powerplay` INT,
  `h_shorthanded_goals` INT,
  `a_shorthanded_goals` INT,
  `h_faceoffs_won`	INT,
  `a_faceoffs_won` INT,
  `h_blocked` INT,
  `a_blocked` INT,
  `h_takeaways` INT,
  `a_takeaways` INT,
  `h_giveaways` INT,
  `a_giveaways` INT,
  `h_penalty_minutes` INT,
  `a_penalty_minutes` INT,
  PRIMARY KEY (`match_id`),
  CONSTRAINT `hostat_match_id`
    FOREIGN KEY (`match_id`)
    REFERENCES `competitions`.`MATCH` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`AM_FOOTBALL_TABLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`AM_FOOTBALL_TABLE` (
  `season_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `position` INT,
  `wins` INT,
  `loses` INT,
  `pct` DECIMAL,
  PRIMARY KEY (`season_id`, `team_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `aftable_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `aftable_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`BASKETBALL_TABLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`BASKETBALL_TABLE` (
  `season_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `position` INT,
  `played` INT,
  `wins` INT,
  `loses` INT,
  `pct` INT,
  `str` DECIMAL,
  PRIMARY KEY (`season_id`, `team_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `btable_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `btable_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`HANDBALL_TABLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`HANDBALL_TABLE` (
  `season_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `position` INT,
  `played` INT,
  `wins` INT,
  `draws` INT,
  `loses` INT,
  `diff` INT,
  `points` INT,
  PRIMARY KEY (`season_id`, `team_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `hatable_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `hatable_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`FOOTBALL_TABLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`FOOTBALL_TABLE` (
  `season_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `position` INT,
  `played` INT,
  `wins` INT,
  `draws` INT,
  `loses` INT,
  `for` INT,
  `against` INT,
  `goal_diff` INT,
  `points` INT,
  PRIMARY KEY (`season_id`, `team_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `ftable_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ftable_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `competitions`.`HOCEY_TABLE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `competitions`.`HOCEY_TABLE` (
  `season_id` VARCHAR(6) NOT NULL,
  `team_id` VARCHAR(6) NOT NULL,
  `position` INT,
  `played` INT,
  `wins` INT,
  `loses` INT,
  `points` INT,
  `wp` INT,
  `lp` INT,
  `str` INT,
  PRIMARY KEY (`season_id`, `team_id`),
  INDEX `team_id_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `hotable_season_id`
    FOREIGN KEY (`season_id`)
    REFERENCES `competitions`.`SEASON` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `hotable_team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `competitions`.`TEAM` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;