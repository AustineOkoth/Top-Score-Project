-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2022 at 08:22 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `topscoredatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `signupinfo`
--

CREATE TABLE `signupinfo` (
  `id` int(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `admno` int(10) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='The password is the same as the  admission number entered.';

--
-- Dumping data for table `signupinfo`
--

INSERT INTO `signupinfo` (`id`, `email`, `admno`, `password`) VALUES
(1, 'austinaustine4@gmail.com', 4321, '$2a$10$r04e056E64A9YjeAZ.6Cc.iDDQE2aZ6SxEOWY3W4HVknCUOGMehZG'),
(2, 'billygates@gmail.com', 1234, '$2a$10$k2diidZ/GkInDzQ714SJnu2Cp3qozpaKrJPss.6Z6d4K.OgxUERWa'),
(3, 'roddyricch@gmail.com', 8080, '$2a$10$qJgOyKax7YjqHxpnSKCTHOJzHl3sjSv4ydB5eA4BIfeOSZvBmui3G');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `signupinfo`
--
ALTER TABLE `signupinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `signupinfo`
--
ALTER TABLE `signupinfo`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
