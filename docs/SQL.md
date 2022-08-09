# Les bases de SQL

CRUD : Create Read Update Delete

## Lecture

Pour récupérer des données depuis une DBR on tuilise la commande SELECT.

`SELECT * from "table_name";`

il est possible de spécifier le ou les champs dont on souhaite récupérer les valeurs,

`SELECT "first_name" FROM "student";`

d'utiliser des clauses ou conditions à respecter,

`SELECT * FROM "student" WHERE "first_name"='Nicolas';`

d'utiliser des opérateurs logiques permettant de gérer plusieurs conditions

`SELECT * FROM "student" WHERE "first_name" = 'Nicolas' AND "promo_id" = 422;`

de trier les résultats,

`SELECT "first_name" FROM "student" ORDER BY "last_name" ASC;`

### les quotes

Doubles quotes pour délimiter les noms des bases, des tables, des champs.
Simples quotes pour délimiter les valeurs de type String



etc... SQL en fait c'est tout un langage, avec des fonctions, des opérateurs etc...

https://sql.sh/  
https://sqlbolt.com/