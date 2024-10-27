import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatPaginatorModule, MatTableModule, MatSortModule, NgIf, NgFor, RouterLink, SearchContainerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
