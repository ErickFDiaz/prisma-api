-- CreateTable
CREATE TABLE `Campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `portalName` VARCHAR(255) NOT NULL,
    `status` VARCHAR(15) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `type` VARCHAR(15) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Campaign_id_key`(`id`),
    UNIQUE INDEX `Campaign_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
