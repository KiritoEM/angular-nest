import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findById(id: number): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }

    async findOne(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { email } });
    }

    async create(userData: CreateUserDto): Promise<User | null> {
        return await this.prisma.user.create({ data: userData });
    }
}
