import { Body, Controller, Get, Inject, Param, Post, Req, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {
  ProfileInterface,
  ProfileParams,
} from '../profiles/src/interface.profile';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): Observable<string> {
    return this.appService.getHome();
  }

  @Post('/create')
  createProfile(
    @Body() profileParams: ProfileParams,
  ): Observable<ProfileInterface> {
    return this.appService.createProfile(profileParams);
  }

  @Get('/profiles/:id')
  getProfile(@Param('id') id: number): Observable<ProfileInterface> {
    return this.appService.getProfile(id);
  }

  @Get('/profiles')
  getProfiles(): Observable<ProfileInterface[]> {
    return this.appService.getProfiles();
  }
}
