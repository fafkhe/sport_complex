import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';
import { AuthStepOneDto } from './dtos/auth_step_one.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @Post('/step_one')
    @ApiResponse({
        status: 201,
        type: '',
    })

    auth_step_one(@Body() body: AuthStepOneDto) {
        return this.authService.authStepOne(body);
      }

}
