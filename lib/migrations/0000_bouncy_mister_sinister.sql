CREATE TABLE IF NOT EXISTS "attendance" (
	"id" serial PRIMARY KEY NOT NULL,
	"studentId" integer NOT NULL,
	"present" boolean DEFAULT false,
	"day" integer NOT NULL,
	"date" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "grades" (
	"id" integer PRIMARY KEY NOT NULL,
	"grade" varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "students" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL,
	"grade" varchar(10) NOT NULL,
	"address" varchar(50) NOT NULL,
	"contact" varchar(11) NOT NULL
);
