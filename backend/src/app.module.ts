import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/api/v0/movies/movies.controller';
import { DbService } from './services/db/db.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".dev.env",
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_HOST)
  ],
  controllers: [MoviesController],
  providers: [DbService],
})
export class AppModule {}
