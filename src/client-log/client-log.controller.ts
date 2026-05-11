import { Controller } from '@nestjs/common';
import { ClientLogService } from './client-log.service';

@Controller('client-log')
export class ClientLogController {
  constructor(private readonly clientLogService: ClientLogService) {}
}
