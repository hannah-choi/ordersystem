CREATE TABLE `menuData` (
  `id` int NOT NULL,
  `prodName` varchar(100) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `category` tinyint NOT NULL DEFAULT '0',
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO study.menuData (id, prodName, price, category, image) VALUES (1, 'Alishan Jingsyuan', 18.00, 0, '1_alishanjingsyuan'),(2, 'Lishan Oolong', 45.00, 0, '2_lishanoolong'),(3, 'Tie Guan Yin', 25.00, 0, '3_tieguanyin'),(4, 'Roasted Shanlinsi Oolong', 28.00, 0, '4_roastedshanlinsioolong'),(5, 'Premium Jasmine Green Tea', 15.00, 0, '5_premiumjasminegreentea'),(6, 'Oriental Beauty', 24.00, 0, '6_orientalbeauty'),(7, 'Aged Tie Guan Yin', 35.00, 0, '7_agedtieguanyin'),(8, 'Aged Dongding Oolong', 42.00, 0, '8_ageddongdingoolong'),(9, 'Si Ji Chun', 5.00, 1, '9_sijichun'),(10, 'Alishan Jingsyuan', 5.00, 1, '10_alishanjingsyuan'),(11, 'Lightly Roasted DongDing Oolong', 5.00, 1, '11_lightlyroasteddongdingoolong'),(12, 'Tie Guan Yin', 5.00, 1, '12_tieguanyin'),(13, 'Premium Jasmine Green Tea', 5.00, 1, '13_premiumjasminegreentea'),(14, 'Guei Fei Tea', 5.00, 1, '14_gueifeitea'),(15, 'Alishan Oolong + Premium Jasmine Green Tea', 40.00, 2, '15_alishanoolong+premiumjasminegreentea'),(16, 'Si ji Chun + Lightly roasted Oolong Tea', 30.00, 2, '16_sijichun+lightlyroastedoolongtea'),(17, 'Lightly Roasted Oolong Tea + Premium Jasmine Green Tea', 35.00, 2, '17_lightlyroastedoolongtea+premiumjasminegreentea'),(18, 'Wunshan Baojhong', 12.00, 0, '18_wunsanbaojhong');

CREATE TABLE `cartData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prodId` tinyint NOT NULL,
  `count` tinyint DEFAULT '1',
  `orderStatus` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cartData_prodId_uindex` (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=798 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `orderData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `count` tinyint DEFAULT NULL,
  `orderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `prodId` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `prodId` (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=465 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci



