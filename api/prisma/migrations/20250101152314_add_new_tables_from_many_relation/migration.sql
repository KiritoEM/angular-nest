/*
  Warnings:

  - You are about to drop the column `pokemon_id` on the `abilities` table. All the data in the column will be lost.
  - You are about to drop the column `pokemon_id` on the `pokemon_types` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "abilities" DROP CONSTRAINT "abilities_pokemon_id_fkey";

-- DropForeignKey
ALTER TABLE "pokemon_types" DROP CONSTRAINT "pokemon_types_pokemon_id_fkey";

-- AlterTable
ALTER TABLE "abilities" DROP COLUMN "pokemon_id";

-- AlterTable
ALTER TABLE "pokemon_types" DROP COLUMN "pokemon_id";

-- CreateTable
CREATE TABLE "pokemon_abilities" (
    "pokemon_id" INTEGER NOT NULL,
    "ability_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_abilities_pkey" PRIMARY KEY ("pokemon_id","ability_id")
);

-- CreateTable
CREATE TABLE "pokemon_pokemon_types" (
    "pokemon_id" INTEGER NOT NULL,
    "pokemon_type_id" INTEGER NOT NULL,

    CONSTRAINT "pokemon_pokemon_types_pkey" PRIMARY KEY ("pokemon_id","pokemon_type_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_abilities_pokemon_id_ability_id_key" ON "pokemon_abilities"("pokemon_id", "ability_id");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_pokemon_types_pokemon_id_pokemon_type_id_key" ON "pokemon_pokemon_types"("pokemon_id", "pokemon_type_id");

-- AddForeignKey
ALTER TABLE "pokemon_abilities" ADD CONSTRAINT "pokemon_abilities_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_abilities" ADD CONSTRAINT "pokemon_abilities_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_pokemon_types" ADD CONSTRAINT "pokemon_pokemon_types_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_pokemon_types" ADD CONSTRAINT "pokemon_pokemon_types_pokemon_type_id_fkey" FOREIGN KEY ("pokemon_type_id") REFERENCES "pokemon_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
