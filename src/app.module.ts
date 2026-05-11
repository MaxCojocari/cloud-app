import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientLogModule } from './client-log/client-log.module';
import { ClientLog } from './client-log/client-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ClientLogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'cloud-app',
      entities: [ClientLog],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
