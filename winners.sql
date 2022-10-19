-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.28 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for winners_maindb
CREATE DATABASE IF NOT EXISTS `winners_maindb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `winners_maindb`;

-- Dumping structure for table winners_maindb.contact_us
DROP TABLE IF EXISTS `contact_us`;
CREATE TABLE IF NOT EXISTS `contact_us` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `user_email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `user_mobile` varchar(10) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `subject` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `msg` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table winners_maindb.contact_us: ~3 rows (approximately)
/*!40000 ALTER TABLE `contact_us` DISABLE KEYS */;
INSERT INTO `contact_us` (`contact_id`, `full_name`, `user_email`, `user_mobile`, `subject`, `msg`) VALUES
	(1, 'Naveen', 'hello@naveenmandal.com', '7415303000', 'Test', 'Hello Sir How are you'),
	(2, 'Geeta Mandal', 'mgitika0@gmail.com', '9993634423', 'Test', 'Hello Daa kerom aasis'),
	(3, 'tt', 'tt@gg.com', '7878787878', 'tst', 'ghj');
/*!40000 ALTER TABLE `contact_us` ENABLE KEYS */;

-- Dumping structure for table winners_maindb.courses
DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coursename` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `image` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table winners_maindb.courses: ~0 rows (approximately)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` (`id`, `coursename`, `price`, `image`) VALUES
	(1, 'Communication Skills', 2000, 'i_comm_skills.jpg'),
	(2, 'Corporate Behaviour Training', 3000, 'i_corp_behaviour.jpg');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;

-- Dumping structure for table winners_maindb.w_udata
DROP TABLE IF EXISTS `w_udata`;
CREATE TABLE IF NOT EXISTS `w_udata` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `w_uname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `w_pwd` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table winners_maindb.w_udata: ~1 rows (approximately)
/*!40000 ALTER TABLE `w_udata` DISABLE KEYS */;
INSERT INTO `w_udata` (`uid`, `w_uname`, `w_pwd`, `is_active`) VALUES
	(1, 'admin', '12345', 1);
/*!40000 ALTER TABLE `w_udata` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
