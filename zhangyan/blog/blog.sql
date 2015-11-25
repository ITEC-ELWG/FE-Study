-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2015 at 04:20 AM
-- Server version: 5.5.34
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_form`
--

CREATE TABLE `blog_form` (
  `password` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` char(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=18 ;

--
-- Dumping data for table `blog_form`
--

INSERT INTO `blog_form` (`password`, `username`, `userid`) VALUES
('e10adc3949ba59abbe56e057f20f883e', '张言', 17);
