import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/db/entities/register.entity';
import { RegisterBodyDTO } from './DTO/register.dto';
import { FileStoreService } from './upload-files.service';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepo: Repository<Register>,
    private readonly storageService: FileStoreService,
  ) {}

  storeData = async (
    body: RegisterBodyDTO,
    documents: any[],
  ): Promise<Register> => {
    const saveRegisterData = this.registerRepo.create(body);
    const registerData = await this.registerRepo.save(saveRegisterData);
    const filePathList = await this.storageService.storeFiles(
      documents,
      registerData.ID,
    );
    // Update the path to add the document path.
    const data = {
      ...registerData,
      DocumentPathList: filePathList,
    };
    return this.registerRepo.save(data);
  };
}
