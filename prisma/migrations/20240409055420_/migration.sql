-- CreateTable
CREATE TABLE "Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "creator" TEXT NOT NULL,
    "createddate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastupdated" DATETIME NOT NULL,
    "tag" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publication" TEXT NOT NULL
);
