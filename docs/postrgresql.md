# PostgreSQL

## installation

Ubuntu : https://doc.ubuntu-fr.org/postgresql#methode_recommandee
Window/OSX : https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

## configuration

Par défaut, lors de l'instalation de PG, celui-ci crée un nouvel utilisateur (postgres), sans mdp. Cet utilisateur est le seul à pouvoir accéder à la BDD.

Pour pouvoir définir un mdp pour l'utilisateur BDD postgres :

```
sudo -i -u postgres psql
```

une fois psql lancé

```sql
ALTER ROLE postgres PASSWORD 'votre-mdp-ici';
```

## Première base, premier utilisateur

```sql
CREATE ROLE spongebob WITH ENCRYPTED PASSWORD 'gary';
CREATE DATABASE bikinibottom OWNER spongebob;
```

Simple et rapide, mais un peu moins securisé (ça passe pour l'apprentissage) car l'utilisateur peut vraiment TOUT faire sur cette DB. Sinon :

```sql
CREATE ROLE spongebob WITH ENCRYPTED PASSWORD 'gary';
CREATE DATABASE bikinibottom;
GRANT SELECT, INSERT, UPDATE, DELETE ON DATABASE bikinibottom TO spongebob;
```

## Quelques commandes de psql

- `\l`pour lister les base de données
- `\c` nom_db`pour se connecter à une base de données
- `\du` pour lister les utilisateurs/rôles existants
- `\dt` pour lister les tables de la base de données courante

Pour plus d'infos :
- https://kourou.oclock.io/ressources/fiche-recap/postgresql/
- https://www.geeksforgeeks.org/postgresql-psql-commands/
