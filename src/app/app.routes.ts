import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'movie/:id', component: MovieComponent},
    { path: 'search', component:SearchComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'profile', component: ProfileComponent},

    { path: '**', redirectTo: ''}

];
