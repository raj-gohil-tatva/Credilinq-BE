import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { Register } from 'src/db/entities/register.entity';
import { RegisterBodyDTO } from './DTO/register.dto';
import { RegisterService } from './register.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FilesInterceptor('Documents'))
  register(
    @UploadedFiles() documents: Express.Multer.File[],
    @Body() body: RegisterBodyDTO,
  ): Promise<Register> {
    return this.registerService.storeData(body, documents);
  }
}
