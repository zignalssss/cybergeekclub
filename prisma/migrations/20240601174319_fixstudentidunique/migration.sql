/*
  Warnings:

  - A unique constraint covering the columns `[student_id]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `account` MODIFY `student_id` VARCHAR(256) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `student_id` ON `account`(`student_id`);
