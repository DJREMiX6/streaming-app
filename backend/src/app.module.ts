import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/api/v0/movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
