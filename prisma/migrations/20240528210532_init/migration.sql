/*
  Warnings:

  - You are about to alter the column `point` on the `account` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `wrong_password` on the `account` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `generation` on the `personnel` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `point` INTEGER NOT NULL DEFAULT 0,
    MODIFY `wrong_password` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `activity_calendar` ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `personnel` MODIFY `generation` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `account_admin` (
    `id` VARCHAR(256) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    `display_name` VARCHAR(256) NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
