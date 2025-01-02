/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "pokemon_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_name_key" ON "pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_id_name_key" ON "pokemon"("id", "name");
