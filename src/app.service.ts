import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs/internal/Observable';
import { ProfileInterface } from '../profiles/src/interface.profile';

@Injectable()
export class AppService {
  constructor(@Inject('PROFILE_SERVICE') private client: ClientProxy) {}

  // async onApplicationBootstrap() {
  //   await this.client.connect();
  // }

  getHello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    return this.client.send<any>(pattern, {});
  }

  accumulate(): Observable<number> {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3, 4];
    return this.client.send<number>(pattern, payload);
  }

  getProfiles(): Observable<ProfileInterface[]> {
    const pattern = { cmd: 'get_profiles' };
    return this.client.send<any>(pattern, {});
  }

  createProfile(): Observable<ProfileInterface[]> {
    const pattern = { cmd: 'create_profile' };
    return this.client.send<any>(pattern, {});
  }
  // createProfile(data: string): Observable<ProfileInterface[]> {
  //   const pattern = { cmd: 'create_profile' };
  //   const payload = data;
  //   return this.client.send<any>(pattern, payload);
  // }
  // getItemById(id) {
  //   return this.itemRepository.findOne(id);
  // }
}
