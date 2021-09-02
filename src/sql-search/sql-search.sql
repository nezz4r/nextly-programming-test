-- THIS IS SEEDING
-- CAN BE RUN AT https://www.mycompiler.io/new/sql FOR TESTING PURPOSES
/*
CREATE TABLE FORNECEDOR (
  CODIGO_FORNECEDOR INTEGER PRIMARY KEY,
  NOME_FORNECEDOR TEXT NOT NULL,
  CIDADE TEXT NOT NULL
);

INSERT INTO FORNECEDOR VALUES (1, 'Superpeças', 'BERLIM');
INSERT INTO FORNECEDOR VALUES (2, 'Peçauto', 'VITORIA');
INSERT INTO FORNECEDOR VALUES (3, 'Nitro Sound', 'VITORIA');
INSERT INTO FORNECEDOR VALUES (4, 'Andre Auto', 'VITORIA');

CREATE TABLE PEÇA (
  CODIGO_PEÇA INTEGER PRIMARY KEY,
  NOME_PEÇA TEXT NOT NULL,
  PREÇO TEXT NOT NULL
);

INSERT INTO PEÇA VALUES (1, 'MOTOR', '1.000');
INSERT INTO PEÇA VALUES (2, 'MOTOR', '2.000');
INSERT INTO PEÇA VALUES (3, 'PORTA', '500');
INSERT INTO PEÇA VALUES (4, 'RODA', '100');
INSERT INTO PEÇA VALUES (5, 'MOTOR', '2.500');
INSERT INTO PEÇA VALUES (6, 'MOTOR', '1.500');

CREATE TABLE CARRO (
  CODIGO_CARRO INTEGER PRIMARY KEY,
  NOME_CARRO TEXT NOT NULL,
  TIPO TEXT NOT NULL
);

INSERT INTO CARRO VALUES (1, 'KOMBI', 'VAN');
INSERT INTO CARRO VALUES (2, 'FUSCA', 'SEDAN');
INSERT INTO CARRO VALUES (3, 'KA', 'HATCH');
INSERT INTO CARRO VALUES (4, 'GOL', 'HATCH');

CREATE TABLE FORNECIMENTO (
  ID INTEGER PRIMARY KEY,
  CODIGO_FORNECEDOR SMALLINT NOT NULL,
  CODIGO_CARRO SMALLINT NOT NULL,
  CODIGO_PEÇA SMALLINT NOT NULL
);

INSERT INTO FORNECIMENTO VALUES (1, 1, 1, 2);
INSERT INTO FORNECIMENTO VALUES (2, 2, 1, 1);
INSERT INTO FORNECIMENTO VALUES (3, 2, 1, 1);
INSERT INTO FORNECIMENTO VALUES (4, 2, 4, 3);
INSERT INTO FORNECIMENTO VALUES (5, 4, 1, 1);
INSERT INTO FORNECIMENTO VALUES (7, 3, 1, 6);

*/

SELECT F.NOME_FORNECEDOR, P.PREÇO
FROM FORNECEDOR AS F, PEÇA AS P, FORNECIMENTO AS FR
WHERE F.CIDADE = 'VITORIA'
AND P.NOME_PEÇA = 'MOTOR'
AND FR.CODIGO_FORNECEDOR = F.CODIGO_FORNECEDOR
AND FR.CODIGO_PEÇA = P.CODIGO_PEÇA
AND FR.CODIGO_CARRO = (
  SELECT CODIGO_CARRO 
  FROM CARRO 
  WHERE NOME_CARRO = 'KOMBI'
);
