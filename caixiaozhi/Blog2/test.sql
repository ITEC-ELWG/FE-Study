/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2015-11-19 15:39:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1234@123.com', '$2y$10$RKJBB21m8OvP1weyudlK8.WuMaEXr1ZDAt.pC8HMR.wqPidZqx0VS');
INSERT INTO `test` VALUES ('123@123.com', '$2y$10$YYL/RUk1LL11B6VOVNZfG.h/7enYf0O3wythTJ.7/p5j420DDe.MS');
