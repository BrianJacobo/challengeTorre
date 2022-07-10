import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiGithubModule } from './api-github/api-github.module';

@Module({
  imports: [ApiGithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
