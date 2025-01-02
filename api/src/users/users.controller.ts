import { Controller, ForbiddenException, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get(':id')
    async getUser(@Param('id') id: string, @Res() res: Response): Promise<Response> {
        const user = await this.userService.findById(parseInt(id));
        const { password, ...dataToSend } = user;

        if (!user) {
            return res.status(404).json("No user found with this id !!!");
        }

        return res.status(200).json({ message: "User fetched successfully", user: dataToSend })
    }
}
