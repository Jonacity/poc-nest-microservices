import { Injectable } from '@nestjs/common';
import { ProfileInterface } from './interface.profile';
import { InjectRepository } from '@nestjs/typeorm';
import Profile from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Profile)
    private profilesRepository: Repository<ProfileInterface>,
  ) {}

  getHello(): string {
    return 'Hello World!!';
  }

  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  profiles = [
    { id: 1, name: 'Bob' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Peter' },
  ];
  getProfiles(): ProfileInterface[] {
    return this.profiles;
  }

  async createProfile(): Promise<ProfileInterface> {
    const profileData = { name: 'PS' };
    const newProfile = await this.profilesRepository.create(profileData);
    await this.profilesRepository.save(newProfile);
    return newProfile;
  }
}
