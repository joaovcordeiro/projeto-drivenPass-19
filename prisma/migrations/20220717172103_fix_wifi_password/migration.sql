/*
  Warnings:

  - You are about to drop the column `wifiPassword` on the `wifis` table. All the data in the column will be lost.
  - Added the required column `password` to the `wifis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifis" DROP COLUMN "wifiPassword",
ADD COLUMN     "password" TEXT NOT NULL;
