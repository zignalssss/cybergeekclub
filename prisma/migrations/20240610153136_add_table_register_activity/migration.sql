-- CreateTable
CREATE TABLE `register_activity` (
    `id` VARCHAR(255) NOT NULL,
    `corporate_activity_id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `built` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
