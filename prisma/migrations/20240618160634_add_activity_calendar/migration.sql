/*
  Warnings:

  - The primary key for the `account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `document` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `ignored_account` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_password` on the `account` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `account` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - You are about to alter the column `email` on the `account` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - The primary key for the `account_admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `account_admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - You are about to alter the column `email` on the `account_admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - You are about to alter the column `password` on the `account_admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - The primary key for the `activity_calendar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `schedule` on the `activity_calendar` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `activity_calendar` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `budget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `budget` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `corporate_activity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `corporate_activity` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `document_log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `approve` on the `document_log` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `document_log` table. All the data in the column will be lost.
  - You are about to drop the column `time_series` on the `document_log` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `document_log` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `expenditure` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `expenditure` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author_id` on the `news` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `news` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - The primary key for the `one_time_password` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `email` on the `one_time_password` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `VarChar(255)`.
  - The primary key for the `personnel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `personnel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(256)` to `Char(36)`.
  - You are about to drop the `register_activity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `activity_calendar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `banned` to the `account` table without a default value. This is not possible if the table is not empty.
  - Made the column `birthdate` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `code` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `display_name` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `faculty_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `faculty_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `major_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `major_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `middle_name_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `middle_name_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nickname_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nickname_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prefix_en` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prefix_th` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profile_image` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `remaining_time` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_id` on table `account` required. This step will fail if there are existing NULL values in that column.
  - Made the column `display_name` on table `account_admin` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `particulars_en` to the `activity_calendar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `particulars_th` to the `activity_calendar` table without a default value. This is not possible if the table is not empty.
  - Made the column `start_period` on table `activity_calendar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_period` on table `activity_calendar` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_th` on table `budget` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_en` on table `budget` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner_th` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner_en` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_th` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_en` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_th` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_en` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_period` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `end_period` on table `corporate_activity` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `account_id` to the `document_log` table without a default value. This is not possible if the table is not empty.
  - Made the column `document` on table `document_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `document_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_th` on table `expenditure` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_en` on table `expenditure` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `account_admin_id` to the `news` table without a default value. This is not possible if the table is not empty.
  - Made the column `banner_th` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner_en` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_th` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_en` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_th` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `particulars_en` on table `news` required. This step will fail if there are existing NULL values in that column.
  - Made the column `otp` on table `one_time_password` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prefix_th` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prefix_en` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name_th` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name_en` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `middle_name_th` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `middle_name_en` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name_th` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name_en` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position_th` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position_en` on table `personnel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profile_image` on table `personnel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `account` DROP PRIMARY KEY,
    DROP COLUMN `document`,
    DROP COLUMN `ignored_account`,
    DROP COLUMN `status`,
    DROP COLUMN `wrong_password`,
    ADD COLUMN `banned` BOOLEAN NOT NULL,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `birthdate` DATE NOT NULL,
    MODIFY `code` ENUM('R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R08', 'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R20', 'R21', 'R22', 'R23', 'R24', 'R25', 'R32', 'R33', 'T02', 'T03', 'T04', 'T05', 'T07', 'T08', 'T12', 'T13', 'T14', 'T17', 'T18', 'T19', 'T20', 'T22', 'T23', 'S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S08', 'S09', 'S10', 'S11', 'S18', 'S19', 'S20', 'G01', 'G02', 'M01', 'M02', 'M03', 'M04', 'M05', 'M07', 'M09') NOT NULL,
    MODIFY `display_name` VARCHAR(255) NOT NULL,
    MODIFY `faculty_en` VARCHAR(255) NOT NULL,
    MODIFY `faculty_th` VARCHAR(255) NOT NULL,
    MODIFY `first_name_en` VARCHAR(255) NOT NULL,
    MODIFY `first_name_th` VARCHAR(255) NOT NULL,
    MODIFY `last_name_en` VARCHAR(255) NOT NULL,
    MODIFY `last_name_th` VARCHAR(255) NOT NULL,
    MODIFY `major_en` VARCHAR(255) NOT NULL,
    MODIFY `major_th` VARCHAR(255) NOT NULL,
    MODIFY `middle_name_en` VARCHAR(255) NOT NULL,
    MODIFY `middle_name_th` VARCHAR(255) NOT NULL,
    MODIFY `nickname_en` VARCHAR(255) NOT NULL,
    MODIFY `nickname_th` VARCHAR(255) NOT NULL,
    MODIFY `phone_number` VARCHAR(255) NOT NULL,
    ALTER COLUMN `point` DROP DEFAULT,
    MODIFY `prefix_en` VARCHAR(255) NOT NULL,
    MODIFY `prefix_th` VARCHAR(255) NOT NULL,
    MODIFY `profile_image` VARCHAR(255) NOT NULL,
    MODIFY `remaining_time` DATETIME(0) NOT NULL,
    MODIFY `student_id` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `account_admin` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `display_name` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `activity_calendar` DROP PRIMARY KEY,
    DROP COLUMN `schedule`,
    ADD COLUMN `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `particulars_en` LONGTEXT NOT NULL,
    ADD COLUMN `particulars_th` LONGTEXT NOT NULL,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `start_period` DATETIME(0) NOT NULL,
    MODIFY `end_period` DATETIME(0) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `budget` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `particulars_th` LONGTEXT NOT NULL,
    MODIFY `particulars_en` LONGTEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `contact` DROP PRIMARY KEY,
    ADD COLUMN `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `category` ENUM('FACEBOOK', 'INSTAGRAM', 'YOUTUBE', 'DISCORD') NOT NULL,
    MODIFY `display_name` VARCHAR(255) NOT NULL,
    MODIFY `uri` MEDIUMTEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `corporate_activity` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    ALTER COLUMN `published_status` DROP DEFAULT,
    MODIFY `banner_th` VARCHAR(255) NOT NULL,
    MODIFY `banner_en` VARCHAR(255) NOT NULL,
    MODIFY `title_th` VARCHAR(255) NOT NULL,
    MODIFY `title_en` VARCHAR(255) NOT NULL,
    MODIFY `particulars_th` LONGTEXT NOT NULL,
    MODIFY `particulars_en` LONGTEXT NOT NULL,
    MODIFY `start_period` DATETIME(0) NOT NULL,
    MODIFY `end_period` DATETIME(0) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `document_log` DROP PRIMARY KEY,
    DROP COLUMN `approve`,
    DROP COLUMN `email`,
    DROP COLUMN `time_series`,
    ADD COLUMN `account_admin_id` CHAR(36) NULL,
    ADD COLUMN `account_id` CHAR(36) NOT NULL,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `document` VARCHAR(255) NOT NULL,
    MODIFY `status` ENUM('PENDING', 'APPROVE', 'REJECT') NOT NULL DEFAULT 'PENDING',
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `expenditure` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `particulars_th` LONGTEXT NOT NULL,
    MODIFY `particulars_en` LONGTEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `news` DROP PRIMARY KEY,
    DROP COLUMN `author_id`,
    ADD COLUMN `account_admin_id` CHAR(36) NOT NULL,
    MODIFY `id` CHAR(36) NOT NULL,
    ALTER COLUMN `published_status` DROP DEFAULT,
    MODIFY `banner_th` VARCHAR(255) NOT NULL,
    MODIFY `banner_en` VARCHAR(255) NOT NULL,
    MODIFY `title_th` VARCHAR(255) NOT NULL,
    MODIFY `title_en` VARCHAR(255) NOT NULL,
    MODIFY `particulars_th` LONGTEXT NOT NULL,
    MODIFY `particulars_en` LONGTEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `one_time_password` DROP PRIMARY KEY,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `otp` CHAR(6) NOT NULL,
    ADD PRIMARY KEY (`email`(36));

-- AlterTable
ALTER TABLE `personnel` DROP PRIMARY KEY,
    MODIFY `id` CHAR(36) NOT NULL,
    ALTER COLUMN `category` DROP DEFAULT,
    MODIFY `prefix_th` VARCHAR(255) NOT NULL,
    MODIFY `prefix_en` VARCHAR(255) NOT NULL,
    MODIFY `first_name_th` VARCHAR(255) NOT NULL,
    MODIFY `first_name_en` VARCHAR(255) NOT NULL,
    MODIFY `middle_name_th` VARCHAR(255) NOT NULL,
    MODIFY `middle_name_en` VARCHAR(255) NOT NULL,
    MODIFY `last_name_th` VARCHAR(255) NOT NULL,
    MODIFY `last_name_en` VARCHAR(255) NOT NULL,
    MODIFY `position_th` VARCHAR(255) NOT NULL,
    MODIFY `position_en` VARCHAR(255) NOT NULL,
    MODIFY `profile_image` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `register_activity`;

-- CreateTable
CREATE TABLE `register_corporate_activity` (
    `id` CHAR(36) NOT NULL,
    `account_id` CHAR(36) NOT NULL,
    `corporate_activity_id` CHAR(36) NOT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `id` ON `activity_calendar`(`id`);
