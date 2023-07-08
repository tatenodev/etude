/*
  Warnings:

  - Added the required column `startedAt` to the `Talk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Talk" ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL;
