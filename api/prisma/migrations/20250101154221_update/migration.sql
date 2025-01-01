/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `abilities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `pokemon_types` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "abilities_name_key" ON "abilities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_types_name_key" ON "pokemon_types"("name");
