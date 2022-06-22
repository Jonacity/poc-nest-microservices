import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ProfileInterface } from './interface.profile';

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
  getProfiles(): ProfileInterface[] {
    return this.appService.getProfiles();
  }

  @MessagePattern({ cmd: 'create_profile' })
  async createProfile(): Promise<ProfileInterface> {
    return this.appService.createProfile();
  }
}
