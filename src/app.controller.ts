import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs/internal/Observable';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<string> {
    return this.appService.getHello();
  }

  @Get('/sum')
  accumulate(): Observable<number> {
    return this.appService.accumulate();
  }

  @Get('/profiles')
  getProfiles(): Observable<any> {
    return this.appService.getProfiles();
  }

  // @Post('/create')
  // @MessagePattern({ role: 'item', cmd: 'create' })
  // createItem(_itemDto) {
  //   // return this.appService.createItem(itemDto);
  //   return { a: 'a', b: 'b' };
  // }
  // @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  // getItemById(id: number) {
  //   return this.appService.getItemById(id);
  // }
}
