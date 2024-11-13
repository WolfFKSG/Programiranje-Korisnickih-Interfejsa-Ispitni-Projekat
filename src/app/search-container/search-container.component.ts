import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MovieService } from '../service/movie.service';



@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, NgIf, NgFor],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent implements OnInit{
  
  @Output() onSearch: EventEmitter<any> = new EventEmitter()
  public selectedName: string | null
  public selectedGenre: string | null
  public selectedDuration: string | null
  public selectedDirector: string | null
  public selectedActor: string | null
  public selectedRelease: string | null
  public selectedStarts: string | null
  public selectedRating: number | null
  public selectedPrice: string | null

  public movieService: MovieService
  public movieList: string[] = []


  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.movieService = MovieService.getInstance()

    const criteria = this.movieService.getSearchCriteria()
    this.selectedName = criteria.name
    this.selectedGenre = criteria.genre
    this.selectedDuration = criteria.duration
    this.selectedDirector = criteria.director
    this.selectedActor = criteria.actor
    this.selectedRelease = criteria.release
    this.selectedStarts = criteria.starts
    this.selectedRating = criteria.rating
    this.selectedPrice = criteria.price
  }
  
  ngOnInit() {
    this.movieList =  this.movieService.getAllMovies().map(movie => movie.name)
    }

  public doSearch() {
    this.movieService.saveSearchCriteria({
      name: this.selectedName,
      genre: this.selectedGenre,
      duration: this.selectedDuration,
      director: this.selectedDirector,
      actor: this.selectedActor,
      release: this.selectedRelease,
      starts: this.selectedStarts,
      rating: this.selectedRating,
      price: this.selectedPrice
    })


  if(this.router.url !="/search") {
    this.router.navigate(['/search'], {relativeTo: this.activeRoute})
    return
  }

  this.onSearch.emit()

  }

  
}
