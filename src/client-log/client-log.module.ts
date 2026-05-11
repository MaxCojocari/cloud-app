import { Module } from '@nestjs/common';
import { ClientLogService } from './client-log.service';
import { ClientLogController } from './client-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientLog } from './client-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientLog])],
  controllers: [ClientLogController],
  providers: [ClientLogService],
  exports: [ClientLogService],
})
export class ClientLogModule {}
