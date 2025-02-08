-- DropForeignKey
ALTER TABLE `media` DROP FOREIGN KEY `Media_userId_fkey`;

-- DropIndex
DROP INDEX `Media_userId_fkey` ON `media`;

-- AlterTable
ALTER TABLE `media` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Media` ADD CONSTRAINT `Media_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
