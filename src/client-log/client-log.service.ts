import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ClientLog } from './client-log.entity';
import { Request } from 'express';

@Injectable()
export class ClientLogService {
  constructor(
    @InjectRepository(ClientLog)
    private readonly clientLogRepo: Repository<ClientLog>,
  ) {}

  logClient(req: Request): Promise<ClientLog> {
    const log: ClientLog = this.clientLogRepo.create({
      ip: req.ip || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      method: req.method,
      path: req.originalUrl,
      host: req.headers['host'],
      referer: req.headers['referer'],
    } as DeepPartial<ClientLog>);

    return this.clientLogRepo.save(log);
  }
}
