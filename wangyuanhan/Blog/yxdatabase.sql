/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yxdatabase

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2015-11-27 20:11:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog_user
-- ----------------------------
DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_user
-- ----------------------------
INSERT INTO `blog_user` VALUES ('1', 'yx', '$2y$10$cleVFk4kQRfXXopAeXUvhurdyuGEVMoKvBUMjd7oTcgRbipY6/q9u');
INSERT INTO `blog_user` VALUES ('2', 'wangyuanhan', '$2y$10$4wMD1Y/KG7bS5P9nx/DvieycEWMiYg6.eHCgxgLUUQ4rxeevzmMQq');
