/*
  Warnings:

  - The values [IMAGE,VIDEO] on the enum `Media_type` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[photoPerfilId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `media` MODIFY `type` ENUM('still', 'motion') NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `photoPerfilId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_photoPerfilId_key` ON `users`(`photoPerfilId`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_photoPerfilId_fkey` FOREIGN KEY (`photoPerfilId`) REFERENCES `Media`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
