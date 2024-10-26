import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieService } from './service/movie.service';
import { MovieModel } from './models/movie.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatIconModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programiranje-korisnickih-interfejsa-ispitni-projekat';

  public movies: MovieModel[];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.dummyMovieList
  }

}
