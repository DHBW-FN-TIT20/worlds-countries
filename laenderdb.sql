-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 25. Okt 2022 um 19:11
-- Server-Version: 10.4.21-MariaDB
-- PHP-Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `laenderdb`
--

CREATE DATABASE IF NOT EXISTS `laenderdb`;

USE laenderdb;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `laender`
--

CREATE TABLE `laender` (
  `LaenderId` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Area` varchar(100) NOT NULL,
  `Population` varchar(100) NOT NULL,
  `Leader` varchar(255) NOT NULL,
  `Phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `laender`
--

INSERT INTO `laender` (`LaenderId`, `Name`, `Area`, `Population`, `Leader`, `Phone`) VALUES
(1, 'Kuwait', '17.818 km²', '4.3 Mio.', 'Emir Nawaf al-Ahmad al-Dschabir as-Sabah', '+965'),
(2, 'Deutschland', '357.022 km²', '83.02 Mio.', 'Olaf Scholz', '+49'),
(3, 'Frankreich', '643.801 km²', '67.02 Mio.', 'Emmanuel Macron', '+33'),
(4, 'Italien', '301.338 km²', '60.36 Mio.', 'Sergio Mattarella', '+39'),
(5, 'Spanien', '505.990 km²', '46.94 Mio.', 'Felipe VI', '+34'),
(6, 'Polen', '312.679 km²', '38.48 Mio.', 'Andrzej Duda', '+48'),
(7, 'Niederlande', '41.543 km²', '17.28 Mio.', 'Willem-Alexander', '+31'),
(8, 'Belgien', '30.528 km²', '11.48 Mio.', 'Philippe', '+32'),
(9, 'Österreich', '83.879 km²', '8.86 Mio.', 'Alexander Van der Bellen', '+43'),
(10, 'Schweiz', '41.285 km²', '8.57 Mio.', 'Simonetta Sommaruga', '+41'),
(11, 'Tschechien', '78.866 km²', '10.69 Mio.', 'Zuzana Čaputová', '+420'),
(12, 'Ungarn', '93.030 km²', '9.77 Mio.', 'János Áder', '+36'),
(13, 'Dänemark', '43.094 km²', '5.80 Mio.', 'Margrethe II', '+45'),
(14, 'Schweden', '449.964 km²', '10.23 Mio.', 'Karl XVI Gustav', '+46'),
(15, 'Norwegen', '385.252 km²', '5.32 Mio.', 'Harald V', '+47'),
(16, 'Slowakei', '49.035 km²', '5.45 Mio.', 'Zuzana Čaputová', '+421'),
(17, 'Slowenien', '20.273 km²', '2.08 Mio.', 'Borut Pahor', '+386'),
(18, 'Finnland', '338.424 km²', '5.52 Mio.', 'Sauli Niinistö', '+358'),
(19, 'Estland', '45.227 km²', '1.32 Mio.', 'Kersti Kaljulaid', '+372'),
(20, 'Lettland', '64.589 km²', '1.94 Mio.', 'Raimonds Vējonis', '+371'),
(21, 'Litauen', '65.300 km²', '2.85 Mio.', 'Gitanas Nausėda', '+370'),
(22, 'Irland', '70.273 km²', '4.90 Mio.', 'Michael D. Higgins', '+353'),
(23, 'Luxemburg', '2.586 km²', '0.59 Mio.', 'Xavier Bettel', '+352'),
(24, 'Malta', '316 km²', '0.44 Mio.', 'George Vella', '+356'),
(25, 'Griechenland', '131.957 km²', '10.77 Mio.', 'Katerina Sakellaropoulou', '+30'),
(26, 'Portugal', '92.391 km²', '10.28 Mio.', 'Marcelo Rebelo de Sousa', '+351'),
(27, 'Rumänien', '238.391 km²', '19.56 Mio.', 'Klaus Iohannis', '+40'),
(28, 'Bulgarien', '110.879 km²', '7.10 Mio.', 'Rumen Radev', '+359'),
(29, 'Zypern', '9.251 km²', '1.18 Mio.', 'Nicos Anastasiades', '+357'),
(30, 'Kroatien', '56.542 km²', '4.08 Mio.', 'Zoran Milanović', '+385'),
(31, 'Albanien', '28.748 km²', '2.87 Mio.', 'Ilir Meta', '+355'),
(32, 'Mazedonien', '25.713 km²', '2.08 Mio.', 'Stevo Pendarovski', '+389'),
(33, 'Serbien', '88.361 km²', '7.06 Mio.', 'Aleksandar Vučić', '+381'),
(34, 'Montenegro', '13.812 km²', '0.63 Mio.', 'Duka Đukanović', '+382'),
(35, 'Bosnien und Herzegowina', '51.197 km²', '3.83 Mio.', 'Zoran Tegeltija', '+387'),
(36, 'Moldau', '33.846 km²', '3.56 Mio.', 'Maia Sandu', '+373'),
(37, 'Ukraine', '603.628 km²', '42.99 Mio.', 'Volodymyr Zelensky', '+380'),
(38, 'Weißrussland', '207.600 km²', '9.49 Mio.', 'Sergej Tschernyschewski', '+375'),
(39, 'Russland', '17.098.242 km²', '144.46 Mio.', 'Wladimir Putin', '+7'),
(40, 'Kasachstan', '2.724.900 km²', '18.53 Mio.', 'Kassym-Jomart Tokajew', '+7'),
(41, 'Turkmenistan', '488.100 km²', '5.95 Mio.', 'Gurbanguly Berdimuhamedow', '+993'),
(42, 'Usbekistan', '447.400 km²', '32.99 Mio.', 'Shavkat Mirziyoyev', '+998'),
(43, 'Tadschikistan', '143.100 km²', '8.88 Mio.', 'Emomali Rahmon', '+992'),
(44, 'Kirgisistan', '198.500 km²', '6.02 Mio.', 'Sooronbai Dschusenbajew', '+996'),
(45, 'Aserbaidschan', '86.600 km²', '9.93 Mio.', 'Ilham Aliyev', '+994'),
(46, 'Armenien', '29.800 km²', '2.94 Mio.', 'Nikol Paschinjan', '+374'),
(47, 'Georgien', '69.700 km²', '3.71 Mio.', 'Salome Zourabichwili', '+995'),
(48, 'Mongolei', '1.564.116 km²', '3.18 Mio.', 'Khaltmaagiin Battulga', '+976'),
(49, 'China', '9.596.960 km²', '1.40 Mrd.', 'Xi Jinping', '+86'),
(50, 'Indien', '3.287.263 km²', '1.35 Mrd.', 'Ram Nath Kovind', '+91'),
(51, 'Indonesien', '1.904.569 km²', '267.07 Mio.', 'Joko Widodo', '+62'),
(52, 'Pakistan', '881.913 km²', '207.71 Mio.', 'Arif Alvi', '+92'),
(53, 'Bangladesch', '147.570 km²', '163.04 Mio.', 'Md. Abdul Hamid', '+880'),
(54, 'Japan', '377.835 km²', '126.47 Mio.', 'Shinzō Abe', '+81'),
(55, 'Thailand', '513.120 km²', '69.63 Mio.', 'Prayut Chan-o-cha', '+66'),
(56, 'Vietnam', '331.212 km²', '95.54 Mio.', 'Nguyễn Phú Trọng', '+84'),
(57, 'Philippinen', '300.000 km²', '106.52 Mio.', 'Rodrigo Duterte', '+63'),
(58, 'Kambodscha', '181.035 km²', '16.18 Mio.', 'Samdech Techo Hun Sen', '+855'),
(59, 'Laos', '236.800 km²', '6.86 Mio.', 'Bounnhang Vorachith', '+856'),
(60, 'Myanmar', '676.578 km²', '53.13 Mio.', 'Win Myint', '+95'),
(61, 'Singapur', '719 km²', '5.64 Mio.', 'Halimah Yacob', '+65'),
(62, 'Malaysia', '329.750 km²', '31.17 Mio.', 'Mahathir Mohamad', '+60'),
(63, 'Brunei', '5.765 km²', '0.43 Mio.', 'Haji Hassanal Bolkiah', '+673'),
(64, 'Nordkorea', '120.540 km²', '25.55 Mio.', 'Kim Jong-un', '+850'),
(65, 'Südkorea', '100.210 km²', '51.47 Mio.', 'Moon Jae-in', '+82'),
(66, 'Taiwan', '35.980 km²', '23.77 Mio.', 'Tsai Ing-wen', '+886'),
(67, 'Hongkong', '1.104 km²', '7.45 Mio.', 'Carrie Lam', '+852'),
(68, 'Macao', '30 km²', '0.64 Mio.', 'Ho Iat-seng', '+853'),
(69, 'Sri Lanka', '65.610 km²', '21.89 Mio.', 'Maithripala Sirisena', '+94'),
(70, 'Nepal', '147.181 km²', '28.09 Mio.', 'Bidhya Devi Bhandari', '+977'),
(71, 'Afghanistan', '652.230 km²', '36.29 Mio.', 'Ashraf Ghani', '+93'),
(72, 'Bhutan', '38.394 km²', '0.75 Mio.', 'Jigme Khesar Namgyel Wangchuck', '+975'),
(73, 'Myanmar', '676.578 km²', '53.13 Mio.', 'Win Myint', '+95'),
(74, 'Maldiven', '298 km²', '0.43 Mio.', 'Abdulla Yameen Abdul Gayoom', '+960'),
(75, 'Sri Lanka', '65.610 km²', '21.89 Mio.', 'Maithripala Sirisena', '+94'),
(76, 'Nepal', '147.181 km²', '28.09 Mio.', 'Bidhya Devi Bhandari', '+977'),
(77, 'USA', '9.833.517 km²', '327.2 Mio.', 'Joe Biden', '+1'),
(78, 'Kanada', '9.984.670 km²', '37.59 Mio.', 'Justin Trudeau', '+1'),
(79, 'Mexiko', '1.964.375 km²', '127.3 Mio.', 'Andrés Manuel López Obrador', '+52'),
(80, 'Brasilien', '8.515.767 km²', '209.3 Mio.', 'Jair Bolsonaro', '+55'),
(81, 'Argentinien', '2.780.400 km²', '44.94 Mio.', 'Alberto Fernández', '+54'),
(82, 'Kolumbien', '1.141.748 km²', '49.82 Mio.', 'Iván Duque', '+57'),
(83, 'Peru', '1.285.216 km²', '32.84 Mio.', 'Francisco Sagasti', '+51'),
(84, 'Venezuela', '916.445 km²', '28.49 Mio.', 'Nicolás Maduro', '+58'),
(85, 'Chile', '756.096 km²', '18.29 Mio.', 'Sebastián Piñera', '+56'),
(86, 'Ecuador', '283.561 km²', '17.31 Mio.', 'Lenín Moreno', '+593'),
(87, 'Bolivien', '1.098.581 km²', '11.38 Mio.', 'Luis Arce', '+591'),
(88, 'Paraguay', '406.752 km²', '7.02 Mio.', 'Mario Abdo Benítez', '+595'),
(89, 'Uruguay', '176.215 km²', '3.46 Mio.', 'Luis Lacalle Pou', '+598'),
(90, 'Kuba', '109.884 km²', '11.28 Mio.', 'Miguel Díaz-Canel', '+53'),
(91, 'Dominikanische Republik', '48.730 km²', '10.71 Mio.', 'Luis Abinader', '+1'),
(92, 'Haiti', '27.750 km²', '11.02 Mio.', 'Jovenel Moïse', '+509'),
(93, 'Jamaika', '10.991 km²', '2.97 Mio.', 'Andrew Holness', '+1'),
(94, 'Trinidad und Tobago', '5.128 km²', '1.39 Mio.', 'Kamla Persad-Bissessar', '+1'),
(95, 'Barbados', '431 km²', '0.28 Mio.', 'Mia Amor Mottley', '+1'),
(96, 'Saint Lucia', '616 km²', '0.18 Mio.', 'Allen Chastanet', '+1'),
(97, 'Saint Vincent und die Grenadinen', '389 km²', '0.11 Mio.', 'Ralph Gonsalves', '+1'),
(98, 'Grenada', '344 km²', '0.11 Mio.', 'Keith Mitchell', '+1'),
(99, 'Dominica', '751 km²', '0.07 Mio.', 'Rodney Charles', '+1'),
(100, 'Antigua und Barbuda', '442 km²', '0.1 Mio.', 'Gail Rigobert', '+1'),
(101, 'Saint Kitts und Nevis', '261 km²', '0.05 Mio.', 'Mark Brantley', '+1'),
(102, 'Bahamas', '13.878 km²', '0.39 Mio.', 'Hubert Minnis', '+1'),
(103, 'Belize', '22.966 km²', '0.39 Mio.', 'Dean Barrow', '+501'),
(104, 'Costa Rica', '51.100 km²', '5.02 Mio.', 'Carlos Alvarado Quesada', '+506'),
(105, 'Panama', '75.517 km²', '4.28 Mio.', 'Nicolás Maduro', '+507'),
(106, 'Guatemala', '108.889 km²', '17.02 Mio.', 'Alejandro Giammattei', '+502'),
(107, 'El Salvador', '21.041 km²', '6.43 Mio.', 'Nayib Bukele', '+503'),
(108, 'Honduras', '112.492 km²', '9.62 Mio.', 'Juan Orlando Hernández', '+504'),
(109, 'Nicaragua', '129.494 km²', '6.49 Mio.', 'Daniel Ortega', '+505'),
(110, 'Nigeria', '923.768 km²', '206.1 Mio.', 'Muhammadu Buhari', '+234'),
(111, 'Ägypten', '1.001.450 km²', '100.8 Mio.', 'Abdel Fattah el-Sisi', '+20'),
(112, 'Südafrika', '1.221.037 km²', '59.3 Mio.', 'Cyril Ramaphosa', '+27'),
(113, 'Demokratische Republik Kongo', '2.344.858 km²', '84.34 Mio.', 'Felix Tshisekedi', '+243'),
(114, 'Tansania', '945.087 km²', '59.42 Mio.', 'John Pombe Magufuli', '+255'),
(115, 'Kenia', '580.367 km²', '53.77 Mio.', 'Uhuru Kenyatta', '+254'),
(116, 'Uganda', '241.038 km²', '45.66 Mio.', 'Yoweri Museveni', '+256'),
(117, 'Algerien', '2.381.741 km²', '43.38 Mio.', 'Abdelmadjid Tebboune', '+213'),
(118, 'Sudan', '1.886.068 km²', '43.13 Mio.', 'Abdalla Hamdok', '+249'),
(119, 'Äthiopien', '1.104.300 km²', '114.96 Mio.', 'Abiy Ahmed', '+251'),
(120, 'Sambia', '752.614 km²', '18.07 Mio.', 'Edgar Lungu', '+260'),
(121, 'Sudan', '1.886.068 km²', '43.13 Mio.', 'Abdalla Hamdok', '+249'),
(122, 'Äthiopien', '1.104.300 km²', '114.96 Mio.', 'Abiy Ahmed', '+251'),
(123, 'Sambia', '752.614 km²', '18.07 Mio.', 'Edgar Lungu', '+260'),
(124, 'Sudan', '1.886.068 km²', '43.13 Mio.', 'Abdalla Hamdok', '+249'),
(125, 'Äthiopien', '1.104.300 km²', '114.96 Mio.', 'Abiy Ahmed', '+251'),
(126, 'Sambia', '752.614 km²', '18.07 Mio.', 'Edgar Lungu', '+260');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `laender`
--
ALTER TABLE `laender`
  ADD PRIMARY KEY (`LaenderId`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `laender`
--
ALTER TABLE `laender`
  MODIFY `LaenderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
