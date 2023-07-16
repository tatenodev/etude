/*
  Warnings:

  - A unique constraint covering the columns `[talkId,userId]` on the table `TalkMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TalkMember_talkId_userId_key" ON "TalkMember"("talkId", "userId");
