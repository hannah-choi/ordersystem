CREATE TABLE `menuData` (
  `id` int NOT NULL,
  `prodName` varchar(100) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `category` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO study.menuData (id, prodName, price, category) VALUES (1, 'Alishan Jingsyuan', 18.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (2, 'Lishan Oolong', 45.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (3, 'Tie Guan Yin', 25.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (4, 'Roasted Shanlinsi Oolong', 28.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (5, 'Premium Jasmine Green Tea', 15.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (6, 'Oriental Beauty', 24.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (7, 'Aged Tie Guan Yin', 35.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (8, 'Aged Dongding Oolong', 42.00, 0);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (9, 'Si Ji Chun', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (10, 'Alishan Jingsyuan', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (11, 'Lightly Roasted DongDing Oolong', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (12, 'Tie Guan Yin', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (13, 'Premium Jasmine Green Tea', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (14, 'Guei Fei Tea', 5.00, 1);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (15, 'Alishan Oolong + Premium Jasmine Green Tea', 40.00, 2);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (16, 'Si ji Chun + Lightly roasted Oolong Tea', 30.00, 2);
INSERT INTO study.menuData (id, prodName, price, category) VALUES (17, 'Lightly Roasted Oolong Tea + Premium Jasmine Green Tea', 35.00, 2);


CREATE TABLE `orderData` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prodName` varchar(50) NOT NULL,
  `prodId` tinyint DEFAULT NULL,
  `price` tinyint NOT NULL,
  `count` int NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `prodId` (`prodId`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

