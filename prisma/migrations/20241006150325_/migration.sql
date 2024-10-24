/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_description_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_label_key" ON "Product"("label");
