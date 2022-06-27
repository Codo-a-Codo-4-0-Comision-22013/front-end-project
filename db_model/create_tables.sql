-- MySQL Workbench Synchronization
-- Generated: 2022-06-27 20:10
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: aleja

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `react`.`Usuario` (
  `idUsuario` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL DEFAULT NULL,
  `userdetails_iduserdetails` INT(11) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`idUsuario` ASC) ,
  INDEX `fk_Usuario_userdetails_idx` (`userdetails_iduserdetails` ASC) ,
  CONSTRAINT `fk_Usuario_userdetails`
    FOREIGN KEY (`userdetails_iduserdetails`)
    REFERENCES `react`.`userdetails` (`iduserdetails`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `react`.`pelicula` (
  `idpelicula` INT(11) NOT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idpelicula`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `react`.`userdetails` (
  `iduserdetails` INT(11) NOT NULL,
  `socialURL` VARCHAR(45) NULL DEFAULT NULL,
  `pictureURL` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`iduserdetails`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `react`.`Usuario_has_pelicula_favorita` (
  `Usuario_idUsuario` INT(11) NOT NULL,
  `pelicula_idpelicula` INT(11) NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `pelicula_idpelicula`),
  INDEX `fk_Usuario_has_pelicula_pelicula1_idx` (`pelicula_idpelicula` ASC) ,
  INDEX `fk_Usuario_has_pelicula_Usuario1_idx` (`Usuario_idUsuario` ASC) ,
  CONSTRAINT `fk_Usuario_has_pelicula_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `react`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_pelicula_pelicula1`
    FOREIGN KEY (`pelicula_idpelicula`)
    REFERENCES `react`.`pelicula` (`idpelicula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
