import { IsString, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class AuthStepOneDto {
  @ApiProperty()
  @IsString()
  email: string;
}
