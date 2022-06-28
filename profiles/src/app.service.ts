import { Injectable } from '@nestjs/common';
import { ProfileInterface, ProfileParams } from './interface.profile';
import { InjectRepository } from '@nestjs/typeorm';
import Profile from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<ProfileInterface>,
  ) {}

  getHome(): string {
    return '🚀 Profile Studio 🚀';
  }

  async createProfile(profileParams: ProfileParams): Promise<ProfileInterface> {
    const newProfile = await this.profilesRepository.create(profileParams);
    await this.profilesRepository.save(newProfile);
    return newProfile;
  }

  async getProfile(id: number): Promise<ProfileInterface> {
    return await this.profilesRepository.findOneBy({ id: id });
  }

  async getProfiles(): Promise<ProfileInterface[]> {
    return await this.profilesRepository.find();
  }
}
