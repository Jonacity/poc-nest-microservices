import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs/internal/Observable';
import {
  ProfileInterface,
  ProfileParams,
} from '../profiles/src/interface.profile';

@Injectable()
export class AppService {
  constructor(@Inject('PROFILE_SERVICE') private client: ClientProxy) {}

  getHome(): Observable<string> {
    const pattern = { cmd: 'home' };
    return this.client.send<any>(pattern, {});
  }

  createProfile(profileParams: ProfileParams): Observable<ProfileInterface> {
    const pattern = { cmd: 'create_profile' };
    return this.client.send<any>(pattern, profileParams);
  }

  getProfile(id: number): Observable<ProfileInterface> {
    const pattern = { cmd: 'get_profile_by_id' };
    return this.client.send<any>(pattern, id);
  }

  getProfiles(): Observable<ProfileInterface[]> {
    const pattern = { cmd: 'get_profiles' };
    return this.client.send<any>(pattern, {});
  }
}
