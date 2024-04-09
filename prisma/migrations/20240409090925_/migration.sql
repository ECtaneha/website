-- CreateTable
CREATE TABLE "announcement" (
    "id" SERIAL NOT NULL,
    "creator" TEXT NOT NULL,
    "createddate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastupdated" TIMESTAMP(3) NOT NULL,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publication" TEXT NOT NULL,

    CONSTRAINT "announcement_pkey" PRIMARY KEY ("id")
);
