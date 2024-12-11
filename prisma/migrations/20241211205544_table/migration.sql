-- CreateEnum
CREATE TYPE "Colors" AS ENUM ('BLACK', 'PINK', 'GOLD', 'WHITE');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "code" SERIAL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "endDate" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "color" "Colors" NOT NULL,
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "cpf" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("cpf")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cpf_fkey" FOREIGN KEY ("cpf") REFERENCES "User"("cpf") ON DELETE CASCADE ON UPDATE CASCADE;
