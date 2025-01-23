/*
  Warnings:

  - A unique constraint covering the columns `[chatroomId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Message_chatroomId_key" ON "Message"("chatroomId");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
