import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { Register } from 'src/db/entities/register.entity';
import { FileStoreService } from './upload-files.service';

@Module({
  controllers: [RegisterController],
  imports: [TypeOrmModule.forFeature([Register])],
  providers: [RegisterService, FileStoreService],
})
export class RegisterModule {}
