/*
  Warnings:

  - You are about to drop the column `userId` on the `ChatRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_userId_fkey";

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "userId";
