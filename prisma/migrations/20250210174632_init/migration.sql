/*
  Warnings:

  - You are about to drop the column `photoPerfilId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `media` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `photoPerfil` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `Media_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_photoPerfilId_fkey`;

-- DropIndex
DROP INDEX `users_photoPerfilId_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `photoPerfilId`,
    ADD COLUMN `photoPerfil` LONGBLOB NOT NULL;

-- DropTable
DROP TABLE `media`;
