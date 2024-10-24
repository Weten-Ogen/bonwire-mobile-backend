/*
  Warnings:

  - Added the required column `sumPrices` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "sumPrices" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "totalItem" INTEGER NOT NULL DEFAULT 0;
