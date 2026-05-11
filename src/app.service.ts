import { Injectable } from '@nestjs/common';
import { ClientLogService } from './client-log/client-log.service';
import { type Request } from 'express';
import * as os from 'os';

@Injectable()
export class AppService {
  constructor(private readonly clientLogService: ClientLogService) {}

  async getHello(req: Request) {
    await this.clientLogService.logClient(req);

    // Get host IP addresses
    const interfaces = os.networkInterfaces();
    const hostIps: string[] = [];

    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name] || []) {
        if (!iface.internal && iface.family === 'IPv4') {
          hostIps.push(iface.address);
        }
      }
    }

    return {
      message: 'Hello World!',
      hostIp: hostIps[0] || '127.0.0.1',
      hostname: os.hostname(),
      timestamp: new Date().toISOString(),
    };
  }
}
