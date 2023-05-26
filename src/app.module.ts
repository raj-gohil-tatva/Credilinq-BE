import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMDataSourceConfig } from './config/typeORM.dataSource';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMDataSourceConfig), RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
