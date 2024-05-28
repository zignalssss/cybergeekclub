/*
  Warnings:

  - You are about to drop the column `birthdate` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `display_name` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `faculty_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `faculty_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `first_name_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `first_name_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `ignored_account` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `last_name_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `last_name_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `major_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `major_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `middle_name_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `middle_name_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `nickname_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `nickname_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `point` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `prefix_en` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `prefix_th` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `profile_image` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `remaining_time` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `account` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_password` on the `account` table. All the data in the column will be lost.
  - You are about to drop the `activity_calendar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `budget` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `corporate_activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `document_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `expenditure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `one_time_password` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `personnel` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `birthdate`,
    DROP COLUMN `code`,
    DROP COLUMN `display_name`,
    DROP COLUMN `document`,
    DROP COLUMN `faculty_en`,
    DROP COLUMN `faculty_th`,
    DROP COLUMN `first_name_en`,
    DROP COLUMN `first_name_th`,
    DROP COLUMN `ignored_account`,
    DROP COLUMN `last_name_en`,
    DROP COLUMN `last_name_th`,
    DROP COLUMN `major_en`,
    DROP COLUMN `major_th`,
    DROP COLUMN `middle_name_en`,
    DROP COLUMN `middle_name_th`,
    DROP COLUMN `nickname_en`,
    DROP COLUMN `nickname_th`,
    DROP COLUMN `phone_number`,
    DROP COLUMN `point`,
    DROP COLUMN `prefix_en`,
    DROP COLUMN `prefix_th`,
    DROP COLUMN `profile_image`,
    DROP COLUMN `remaining_time`,
    DROP COLUMN `role`,
    DROP COLUMN `status`,
    DROP COLUMN `student_id`,
    DROP COLUMN `wrong_password`;

-- DropTable
DROP TABLE `activity_calendar`;

-- DropTable
DROP TABLE `budget`;

-- DropTable
DROP TABLE `corporate_activity`;

-- DropTable
DROP TABLE `document_log`;

-- DropTable
DROP TABLE `expenditure`;

-- DropTable
DROP TABLE `news`;

-- DropTable
DROP TABLE `one_time_password`;

-- DropTable
DROP TABLE `personnel`;
