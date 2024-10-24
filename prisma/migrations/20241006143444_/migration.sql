/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_description_key" ON "Product"("description");
