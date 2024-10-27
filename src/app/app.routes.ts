import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'movie/:id', component: MovieComponent},
    { path: 'search', component:SearchComponent},

    { path: '**', redirectTo: ''}

];
