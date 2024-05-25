-- CreateTable
CREATE TABLE `contact` (
    `id` VARCHAR(256) NOT NULL,
    `category` ENUM('FACEBOOK', 'INSTAGRAM', 'YOUTUBE') NOT NULL,
    `display_name` LONGTEXT NOT NULL,
    `uri` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(256) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `password` LONGTEXT NOT NULL,
    `student_id` LONGTEXT NULL,
    `profile_image` LONGTEXT NULL,
    `prefix_th` LONGTEXT NULL,
    `prefix_en` LONGTEXT NULL,
    `first_name_th` LONGTEXT NULL,
    `first_name_en` LONGTEXT NULL,
    `middle_name_th` LONGTEXT NULL,
    `middle_name_en` LONGTEXT NULL,
    `last_name_th` LONGTEXT NULL,
    `last_name_en` LONGTEXT NULL,
    `nickname_th` LONGTEXT NULL,
    `nickname_en` LONGTEXT NULL,
    `faculty_th` LONGTEXT NULL,
    `faculty_en` LONGTEXT NULL,
    `major_th` LONGTEXT NULL,
    `major_en` LONGTEXT NULL,
    `phone_number` LONGTEXT NULL,
    `birthdate` DATE NULL,
    `code` LONGTEXT NULL,
    `role` ENUM('MEMBER', 'CERTIFIED') NOT NULL DEFAULT 'MEMBER',
    `point` BIGINT NOT NULL DEFAULT 0,
    `document` LONGTEXT NULL,
    `status` ENUM('ORDINARY', 'PENDING', 'CERTIFIED', 'BANNED', 'ALUMNI') NOT NULL DEFAULT 'ORDINARY',
    `display_name` LONGTEXT NULL,
    `remaining_time` DATETIME(0) NULL,
    `wrong_password` BIGINT NOT NULL DEFAULT 0,
    `ignored_account` DATETIME(0) NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `activity_calendar` (
    `id` VARCHAR(256) NOT NULL,
    `schedule` LONGTEXT NULL,
    `start_period` DATETIME(0) NULL,
    `end_period` DATETIME(0) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `budget` (
    `id` VARCHAR(256) NOT NULL,
    `category` ENUM('INCOME', 'SUBSIDY') NOT NULL,
    `particulars_th` LONGTEXT NULL,
    `particulars_en` LONGTEXT NULL,
    `money` DOUBLE NOT NULL,
    `time_series` DATETIME(0) NOT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `corporate_activity` (
    `id` VARCHAR(256) NOT NULL,
    `published_status` BOOLEAN NOT NULL DEFAULT false,
    `banner_th` LONGTEXT NULL,
    `banner_en` LONGTEXT NULL,
    `title_th` LONGTEXT NULL,
    `title_en` LONGTEXT NULL,
    `particulars_th` LONGTEXT NULL,
    `particulars_en` LONGTEXT NULL,
    `start_period` DATETIME(0) NULL,
    `end_period` DATETIME(0) NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `document_log` (
    `id` VARCHAR(256) NOT NULL,
    `email` LONGTEXT NOT NULL,
    `document` LONGTEXT NULL,
    `status` ENUM('PENDING', 'APPROVE', 'REJECT') NULL DEFAULT 'PENDING',
    `notation` LONGTEXT NULL,
    `time_series` DATETIME(0) NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `approve` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenditure` (
    `id` VARCHAR(256) NOT NULL,
    `particulars_th` LONGTEXT NULL,
    `particulars_en` LONGTEXT NULL,
    `money` DOUBLE NOT NULL,
    `time_series` DATETIME(0) NOT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `news` (
    `id` VARCHAR(256) NOT NULL,
    `published_status` BOOLEAN NOT NULL DEFAULT false,
    `banner_th` LONGTEXT NULL,
    `banner_en` LONGTEXT NULL,
    `title_th` LONGTEXT NULL,
    `title_en` LONGTEXT NULL,
    `particulars_th` LONGTEXT NULL,
    `particulars_en` LONGTEXT NULL,
    `author_id` VARCHAR(256) NOT NULL,
    `time_series` DATETIME(0) NOT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `one_time_password` (
    `email` VARCHAR(256) NOT NULL,
    `otp` LONGTEXT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personnel` (
    `id` VARCHAR(256) NOT NULL,
    `generation` BIGINT NOT NULL,
    `category` ENUM('MEMBER', 'ADVISOR') NOT NULL DEFAULT 'MEMBER',
    `prefix_th` LONGTEXT NULL,
    `prefix_en` LONGTEXT NULL,
    `first_name_th` LONGTEXT NULL,
    `first_name_en` LONGTEXT NULL,
    `middle_name_th` LONGTEXT NULL,
    `middle_name_en` LONGTEXT NULL,
    `last_name_th` LONGTEXT NULL,
    `last_name_en` LONGTEXT NULL,
    `position_th` LONGTEXT NULL,
    `position_en` LONGTEXT NULL,
    `profile_image` LONGTEXT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
