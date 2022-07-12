import { Controller, Get, Query } from '@nestjs/common';
import { ParametersDto } from './dtos/parameters.dto';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get()
  getData(@Query() data: ParametersDto) {
    return this.githubService.getData(data.topNumber, data.language);
  }
}
