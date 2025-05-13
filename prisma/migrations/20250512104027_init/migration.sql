-- CreateTable
CREATE TABLE "InstagramToken" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "access_token" TEXT NOT NULL,
    "expires_in" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
