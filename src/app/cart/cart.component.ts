import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedModel, ReviewModel, UserModel } from '../models/user.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../service/movie.service';
import { NgIf } from '@angular/common';
import { OnInit, ViewChild } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCard, MatCardContent, MatButtonModule, NgIf, MatTableModule, HttpClientModule, MatSortModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  private userService: UserService
  public movieService: MovieService
  public active: UserModel | null = null
  public totalPrice: number

  public displayedColumns: string[] = ['name', 'genre', 'director', 'actor', 'duration', 'release', 'starts', 'rating', 'remove'];
  public dataSource: MatTableDataSource<BookedModel> | null = null
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.userService = UserService.getInstance()
    this.movieService = MovieService.getInstance()
    this.totalPrice = this.userService.calculatePrice()
  }

  ngOnInit(): void {
    try {
      this.active = this.userService.getCurrentUser()

      if (this.active.booked.length == 0) return
      const ids = this.active.booked.map(obj => obj.id)
      this.movieService.getSpecMovieId(ids).subscribe(rsp => {
        for (let obj of this.active!.booked) {
          for (let movie of rsp.content) {
            if (obj.id == movie.id) {
              obj.movie = movie
            }
          }
        }

        this.dataSource = new MatTableDataSource<BookedModel>(this.active!.booked)
        this.dataSource.sort = this.sort;
        this.updatePrice()
      })
    } catch (e) {
      this.router.navigate(['/login'], {
        relativeTo: this.route
      })
    }
  }


  public announceSortChange(sortState: Sort) {
    if (!sortState.active || sortState.direction === '') {
      return;
    }
  
    const data = this.active?.booked.slice();
    const isAsc = sortState.direction === 'asc';
  
    this.dataSource!.data = data!.sort((a, b) => {
      switch (sortState.active) {
        case 'movieName':
          return this.compare(a.movie?.name || '', b.movie?.name || '', isAsc);

        default:
          return 0;
      }
    });
  }
  
  private compare(a: string, b: string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  

  public doLikeButton(id: number) {
    for (let item of this.active!.booked) {
      if (item.id == id) {
        // Is liked
        if (item.review == ReviewModel.LIKED) {
          item.review = ReviewModel.NONE
          return
        }

        // Is Not liked
        item.review = ReviewModel.LIKED
      }
    }

    console.log(this.active)
    this.userService.updateUser(this.active!)
  }

  public doDislikeButton(id: number) {
    for (let item of this.active!.booked) {
      if (item.id == id) {
        // Is disliked
        if (item.review == ReviewModel.DISLIKED) {
          item.review = ReviewModel.NONE
          return
        }

        // Is Not Disliked
        item.review = ReviewModel.DISLIKED
      }
    }

    this.userService.updateUser(this.active!)
  }

  public removeMovie(id: number){
    if(this.active){
      this.userService.removeBooked(id)
      this.active.booked = this.active.booked.filter(booked => booked.id !== id);
      this.dataSource = new MatTableDataSource<BookedModel>(this.active.booked);
      this.dataSource.sort = this.sort;
      this.updatePrice()
    }
  }

  public getTotalPrice() {
    return this.totalPrice
  }

  public updatePrice() {
    this.totalPrice = this.userService.calculatePrice()
  }
}

