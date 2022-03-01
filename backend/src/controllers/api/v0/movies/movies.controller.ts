import { Controller, Get, Version } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    @Version('0.0.0')
    getMovies() {

    }

}
