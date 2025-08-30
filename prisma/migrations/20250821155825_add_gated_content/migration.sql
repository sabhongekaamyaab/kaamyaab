-- DropIndex
DROP INDEX "EmailList_email_key";

-- AlterTable
ALTER TABLE "EmailList" ADD COLUMN "linkedinId" TEXT;
ALTER TABLE "EmailList" ADD COLUMN "pageAccessed" TEXT;

-- CreateIndex
CREATE INDEX "EmailList_email_pageAccessed_idx" ON "EmailList"("email", "pageAccessed");
