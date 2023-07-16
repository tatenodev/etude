/*
  Warnings:

  - Added the required column `teamId` to the `Talk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talk" ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Talk" ADD CONSTRAINT "Talk_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
