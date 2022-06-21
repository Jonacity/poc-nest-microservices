import { Injectable } from '@nestjs/common';
import { Profile } from './interface.profile';

@Injectable()
export class AppService {
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
  getProfiles(): Profile[] {
    return this.profiles;
  }
}
