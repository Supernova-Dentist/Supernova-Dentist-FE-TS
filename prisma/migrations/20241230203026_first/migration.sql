-- CreateTable
CREATE TABLE "InstagramToken" (
    "id" SERIAL NOT NULL,
    "access_token" TEXT NOT NULL,
    "expires_in" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstagramToken_pkey" PRIMARY KEY ("id")
);
