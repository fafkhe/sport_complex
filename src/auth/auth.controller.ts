import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    // @Post('/step_one')
    // @ApiResponse({
    //     status: 201,
    //     type: '',
    // })

    // auth_step_one(@Body() body: AuthStepOneDto) {
    //     return this.authService.authStepOne(body);
    //   }

}
