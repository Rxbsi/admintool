-- liquibase formatted sql

-- changeset robin.franz:Adding-User
CREATE TABLE ADMIN_USER(
  ID bigint not null,
  USERNAME varchar(255),
  EMAIL varchar(255),
  PASSWORD varchar(255),
  NAME varchar(255),
  LAST_NAME varchar(255)
);