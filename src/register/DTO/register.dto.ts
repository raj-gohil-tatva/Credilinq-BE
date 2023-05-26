import { IsString, IsEmail, IsAlphanumeric, Allow } from 'class-validator';

export class RegisterBodyDTO {
  @IsString()
  @IsAlphanumeric()
  CompanyUEN: string;

  @IsString()
  CompanyName: string;

  @IsString()
  CompanyPosition: string;

  @IsString()
  FullName: string;

  @IsString()
  @IsEmail()
  Email: string;

  @IsString()
  PhoneNumber: string;

  @Allow()
  Documents: any[];
}
