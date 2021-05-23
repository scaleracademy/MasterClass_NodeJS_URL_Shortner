
## Development 

### Database Setup 

Enter PSQL for Postgres 

```
# Linux 
sudo -u postgres psql 

# Mac 
psql postgres 
```

Create Database, User and Grant Privilege

```psql
create database sclrac;
create user sclrac with encrypted password 'sclrac';
grant all privileges on sclrac.* to sclrac;
```