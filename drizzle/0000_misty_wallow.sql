CREATE TABLE IF NOT EXISTS "addresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" char(40) NOT NULL,
	"streetName" varchar(10),
	"unitNumber" varchar(200),
	"city" varchar(200),
	"country" varchar,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "brands" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(40) NOT NULL,
	"img" varchar,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cart_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_Item_id" integer,
	"userId" char(40) NOT NULL,
	"count" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"name" varchar NOT NULL,
	"img" varchar,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"parent_id" integer,
	"product_item_id" integer,
	"quantity" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"address_id" integer,
	"userId" char(40) NOT NULL,
	"status" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"productId" integer,
	"sku" varchar,
	"img" varchar,
	"color" varchar,
	"size" varchar,
	"quantity" integer DEFAULT 0,
	"price" numeric(4, 2),
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer,
	"name" varchar(200) NOT NULL,
	"description" varchar(1024) NOT NULL,
	"image" varchar(200) NOT NULL,
	"state" boolean NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_item_id" integer,
	"userId" char(40) NOT NULL,
	"rating" integer NOT NULL,
	"comment" varchar(300) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"modified_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_product_Item_id_product_items_id_fk" FOREIGN KEY ("product_Item_id") REFERENCES "product_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_items" ADD CONSTRAINT "order_items_parent_id_orders_id_fk" FOREIGN KEY ("parent_id") REFERENCES "orders"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_item_id_product_items_id_fk" FOREIGN KEY ("product_item_id") REFERENCES "product_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orders" ADD CONSTRAINT "orders_address_id_addresses_id_fk" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "product_items" ADD CONSTRAINT "product_items_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_item_id_product_items_id_fk" FOREIGN KEY ("product_item_id") REFERENCES "product_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
