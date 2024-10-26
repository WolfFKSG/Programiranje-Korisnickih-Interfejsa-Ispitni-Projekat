import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { MovieModel } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent{
  public movies: MovieService
  public movie: MovieModel | undefined

  constructor(private route: ActivatedRoute) {
    this.movies = MovieService.getInstance()
    route.params.subscribe(params => {
    this.movie=this.movies.getSpecificMovie(params['id'])
    })
  }


public generateImageUrl() {
  return `/assets/images/${this.movie?.id}.png`
}




}
