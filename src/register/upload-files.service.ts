// file-storage.service.ts
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileStoreService {
  async storeFiles(
    files: Express.Multer.File[],
    id: number,
  ): Promise<string[]> {
    const uploadPath = `uploads/${id}`;
    // Create the destination folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    const storedFilePaths: string[] = [];
    for (const file of files) {
      const originalFilename = file.originalname;
      const filePath = path.posix.join(uploadPath, originalFilename);
      await fs.promises.writeFile(filePath, file.buffer);
      storedFilePaths.push(filePath);
    }
    return storedFilePaths;
  }
}
