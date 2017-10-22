\\create connection to AWS hosted db in cloud9

psql --host=datastructures.cwa4xwjfcya6.us-east-1.rds.amazonaws.com --port=5432 --username=mbcarradine --password --dbname=fernsaysdb



\\create table 

fernsaysdb=> CREATE TABLE sensordata(
fernsaysdb(> TILTSENSOR int,
fernsaysdb(> TEMPSENSOR double precision,
fernsaysdb(> SENSORTIME timestamp DEFAULT current_timestamp);



\\verifying table
fernsaysdb=> \d
             List of relations
 Schema |    Name    | Type  |    Owner    
--------+------------+-------+-------------
 public | sensordata | table | mbcarradine
(1 row)




\\insert statements
fernsaysdb=> INSERT INTO sensordata VALUES (1, 24.89, DEFAULT);
fernsaysdb=> INSERT INTO sensordata VALUES (0, 25.22, DEFAULT);
fernsaysdb=> INSERT INTO sensordata VALUES (0, 25.13, DEFAULT);
fernsaysdb=> INSERT INTO sensordata VALUES (0, 25.13, DEFAULT);




\\select statement
fernsaysdb=> SELECT * from sensordata;
 tiltsensor | tempsensor |         sensortime         
------------+------------+----------------------------
          0 |      25.22 | 2017-10-20 00:36:29.129324
          1 |      24.89 | 2017-10-20 00:37:42.857468
          0 |      25.13 | 2017-10-20 00:50:54.129875
          0 |      25.13 | 2017-10-20 00:58:22.1188
(4 rows)
