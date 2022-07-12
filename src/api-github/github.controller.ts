import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get()
  getData(
    @Query('topNumber') topNumber: number,
    @Query('language') language: string,
  ) {
    return this.githubService.getData(topNumber, language);
  }
}
