CREATE TABLE "customers" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "customers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "querys" (
	"id" serial NOT NULL,
	"customer_id" int NOT NULL,
	"doctor_id" int NOT NULL,
	"time" int NOT NULL,
	"day" TEXT NOT NULL,
	"status" TEXT NOT NULL DEFAULT 'requested',
	"created_at" TIMESTAMP NOT NULL DEFAULT now(),
	CONSTRAINT "querys_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "specialtys" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "specialtys_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "doctors" (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"specialty" int DEFAULT NULL,
	CONSTRAINT "doctors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "querys" ADD CONSTRAINT "querys_fk0" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");
ALTER TABLE "querys" ADD CONSTRAINT "querys_fk1" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id");


ALTER TABLE "doctors" ADD CONSTRAINT "doctors_fk0" FOREIGN KEY ("specialty") REFERENCES "specialtys"("id");

