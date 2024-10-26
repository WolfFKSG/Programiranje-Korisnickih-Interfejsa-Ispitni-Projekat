import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,NgFor,NgIf,MatCardModule,RouterLink,MatListModule, MatCardImage,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  public movies: MovieModel[]

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.dummyMovieList
  }
  // ngOnInit(): void {
  //   this.dataService.
  // }
  
  public generateImageUrl(id: number) {
    return `/assets/images/${id}.png`
  }

}
