CREATE TABLE "games" (
    "_id" serial NOT NULL UNIQUE,
    "title" varchar NOT NULL,
    "genre" varchar NOT NULL,
    "realeasedate" varchar NOT NULL,
    CONSTRAINT "games_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "lists" (
    "_id" serial NOT NULL UNIQUE,
    "userid" integer NOT NULL,
    "listname" varchar NOT NULL,
    CONSTRAINT "lists_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE "platforms" (
    "game_id" integer NOT NULL,
    "PlayStation" boolean NOT NULL,
    "Xbox" boolean NOT NULL,
    "Nintendo" boolean NOT NULL,
    "PC" boolean NOT NULL
) WITH (
    OIDS=FALSE
);

CREATE TABLE "users" (
    "_id" serial NOT NULL UNIQUE,
    "username" varchar NOT NULL UNIQUE,
    "password" varchar NOT NULL,
    "email" varchar NOT NULL,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP
) WITH (
    OIDS=FALSE
);

CREATE TABLE "list_data" (
    "_id" serial NOT NULL UNIQUE,
    "list_id" integer NOT NULL,
    "game_id" integer NOT NULL
) WITH (
    OIDS=FALSE
);