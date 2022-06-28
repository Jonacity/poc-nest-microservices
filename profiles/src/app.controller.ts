import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { ProfileInterface, ProfileParams } from './interface.profile';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @MessagePattern({ cmd: 'home' })
  getHome(): string {
    return this.appService.getHome();
  }

  @MessagePattern({ cmd: 'create_profile' })
  async createProfile(profileParams: ProfileParams): Promise<ProfileInterface> {
    return this.appService.createProfile(profileParams);
  }

  @MessagePattern({ cmd: 'get_profile_by_id' })
  async getProfile(id: number): Promise<ProfileInterface> {
    return this.appService.getProfile(id);
  }

  @MessagePattern({ cmd: 'get_profiles' })
  async getProfiles(): Promise<ProfileInterface[]> {
    return this.appService.getProfiles();
  }
}
