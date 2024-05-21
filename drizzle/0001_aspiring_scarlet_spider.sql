ALTER TABLE "product_items" ALTER COLUMN "productId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "sku" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "img" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "color" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "size" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "quantity" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "product_items" ALTER COLUMN "price" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "category_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "modified_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "categories" ADD COLUMN "longName" varchar NOT NULL;