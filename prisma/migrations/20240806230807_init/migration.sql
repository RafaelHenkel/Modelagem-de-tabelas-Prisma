-- AlterTable
ALTER TABLE "products" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "available" DROP NOT NULL,
ALTER COLUMN "available" SET DEFAULT true;

-- AlterTable
ALTER TABLE "shops" ALTER COLUMN "shop_type" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "suppliers" ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;
