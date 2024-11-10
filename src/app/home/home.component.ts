import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MovieService } from '../service/movie.service';
import { MovieModel } from '../models/movie.model';
import { MatCardImage } from '@angular/material/card';
import { SearchContainerComponent } from "../search-container/search-container.component";
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NgFor, NgIf, MatCardModule, RouterLink, MatListModule, MatCardImage, SearchContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  public movies: MovieModel[]

  constructor(private movieService: MovieService, private userService: UserService) {
    this.movies = this.movieService.dummyMovieList
  }

  public generateImageUrl(id: number) {
    return `/assets/images/${id}.png`
  }

  public bookMovie(movie: MovieModel) {
    this.userService.addToBooked(movie);
  }
  
}
