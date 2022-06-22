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

  @Get('/create')
  createProfile(): Observable<any> {
    return this.appService.createProfile();
  }
  // @Post('/create')
  // createProfile(@Param('name') name: string): Observable<any> {
  //   return this.appService.createProfile(name);
  // }

  // @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  // getItemById(id: number) {
  //   return this.appService.getItemById(id);
  // }
}
