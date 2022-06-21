import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../profiles/src/interface.profile';
// import { ItemEntity } from './item.entity';
// import { ItemRepository } from './item.repository';

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
  getProfiles(): Observable<Profile[]> {
    const pattern = { cmd: 'get_profiles' };
    return this.client.send<any>(pattern, {});
  }
  // createItem(itemDto) {
  //   const item = new ItemEntity();
  //   item.name = itemDto.name;
  //   return this.itemRepository.save(item);
  // }
  // getItemById(id) {
  //   return this.itemRepository.findOne(id);
  // }
}
