import { Injectable } from '@nestjs/common';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  getAllMovies(): Movie[] {
    const movies: Movie[] = [
      {
        id: 1,
        code: '1',
        title: 'Movie 1',
        releaseDate: '2020-01-01',
        movieUrl: 'https://movie1.com',
        imageUrl: 'https://image1.com',
        thumbnailUrl: 'https://thumbnail1.com',
        actor: 'Actor 1',
        isDownloaded: false,
      },
    ];
    return movies;
  }
}
