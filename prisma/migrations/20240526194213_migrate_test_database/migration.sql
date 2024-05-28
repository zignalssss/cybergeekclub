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
