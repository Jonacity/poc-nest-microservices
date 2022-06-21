import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { Profile } from './interface.profile';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return this.appService.accumulate(data);
  }

  @MessagePattern({ cmd: 'get_profiles' })
  getProfiles(): Profile[] {
    return this.appService.getProfiles();
  }
}
