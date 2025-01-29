import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
    private readonly user: User[] = [];

    async authStepOne(data) {
        
    }
}
