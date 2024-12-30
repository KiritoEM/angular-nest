import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findById(id: number) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findOne(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async create(userData: CreateUserDto) {
        return this.prisma.user.create({ data: userData });
    }
}
