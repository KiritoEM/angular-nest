import { Catch, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
@Catch(Error)
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleDestroy() {
        await this.$connect();
        console.log("Prisma database connected !!!");
    }
    async onModuleInit() {
        await this.$disconnect();
        console.log("Prisma database disconnected !!!");
    }
}
