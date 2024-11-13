import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MovieService } from '../service/movie.service';
import { MovieModel } from '../models/movie.model';
import { PageModel } from '../models/page.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatPaginatorModule, MatTableModule, MatSortModule, NgIf, NgFor, RouterLink, SearchContainerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public movieService: MovieService
  public data: PageModel<MovieModel> | null = null

  constructor () {
    this.movieService = MovieService.getInstance()
  }

  ngOnInit(): void {
    const criteria = this.movieService.getSearchCriteria()
    if (criteria.name)
      this.loadTableData(criteria.name)
    this.doSearch()
  }

  public displayedColumns: string[] = ['name' ,'genre' ,'director', 'actor', 'duration', 'release', 'starts', 'rating', 'action' ];
  public dataSource: MatTableDataSource<MovieModel> | null = null
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  public doSearch() {
    const criteria = this.movieService.getSearchCriteria()
    if (!criteria.name && !criteria.genre && !criteria.duration && !criteria.director && !criteria.actor && !criteria.release && !criteria.starts && !criteria.rating) {
      // @ts-ignore
      Swal.fire({
        title: 'No search critearia selected!',
        text: 'Please select at least one search criteria',
        icon: 'error',
        confirmButtonText: 'I understand'
      })
      return
    }
    this.loadTableData(criteria)
  }

  private loadTableData(mov: any) {
  this.movieService.getMoviesByCriteria(mov).subscribe(rsp => {
    this.data = rsp
    this.dataSource = new MatTableDataSource<MovieModel>(rsp.content);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
  
  public announceSortChange(sortState: Sort) {
    return
  }
}
