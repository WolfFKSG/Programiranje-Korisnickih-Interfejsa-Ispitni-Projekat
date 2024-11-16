import { Injectable } from '@angular/core';
import { UserModel, ReviewModel, BookedModel } from '../models/user.model';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private static instance: UserService;

  private constructor() {}

  public static getInstance() {
    if (this.instance == null) this.instance = new UserService();
    return this.instance;
  }

  private retrieveAllUsers(): UserModel[] {
    let json = localStorage.getItem('users');
    if (json == null) {
      const defaultUser = {
        email: 'vuk@example.com',
        name: 'Vuk Damnjanovic',
        password: 'vuk',
        booked: [
          {
            id: 1,
            movie: null,
            review: ReviewModel.NONE,
          },
          {
            id: 10,
            movie: null,
            review: ReviewModel.NONE,
          },
        ],
      };
      localStorage.setItem('users', JSON.stringify([defaultUser]));
      json = localStorage.getItem('users');
    }

    return JSON.parse(json!);

  }

  
  public createUser(model: UserModel) {
    const arr = this.retrieveAllUsers();
    if (arr.find((user) => user.email === model.email))
      throw new Error('EMAIL_ALREADY_EXISTS');

    arr.push(model);
    localStorage.setItem('users', JSON.stringify(arr));
  }

  public login(email: string, password: string) {
    const arr = this.retrieveAllUsers();
    const usr = arr.find(
      (user) => user.email == email && password == user.password
    );

    if (usr == undefined) throw new Error('LOGIN_FAILED');

    sessionStorage.setItem('active', usr.email);
  }

  public getCurrentUser() {
    if (!sessionStorage.getItem('active')) throw new Error('NO_ACTIVE_USER');

    const email = sessionStorage.getItem('active');
    const arr = this.retrieveAllUsers();
    const usr = arr.find((user) => user.email == email);

    if (usr == undefined) throw new Error('NO_ACTIVE_USER');

    return usr;
  }

  public hasCurrentUser() {
    return sessionStorage.getItem('active') ? true : false;
  }

  public changePassword(password: string) {
    const active = this.getCurrentUser();
    active.password = password;

    var all = this.retrieveAllUsers();
    for (let i = 0; i < all.length; i++) {
      if (all[i].email == active.email) {
        all[i].password = password;
      }
    }
    localStorage.setItem('users', JSON.stringify(all));
  }

  public updateUser(model: UserModel) {
    var all = this.retrieveAllUsers();
    for (let i = 0; i < all.length; i++) {
      if (all[i].email == model.email) {
        all[i] = model;
      }
    }
    localStorage.setItem('users', JSON.stringify(all));
  }

  public logout() {
    sessionStorage.removeItem('active');
  }

  public addToBooked(movie: MovieModel) {
    const currentUser = this.getCurrentUser();
    const alreadyBooked = currentUser.booked.some(
      (booked) => booked.movie?.id === movie.id
    );

    if (!alreadyBooked) {
      const newBooked: BookedModel = {
        id: movie.id,
        movie: movie,
        review: ReviewModel.NONE,
      };
      currentUser.booked.push(newBooked);
      alert('Movie sucessfully added');

      const allUsers = this.retrieveAllUsers();
      const updatedUsers = allUsers.map((user) => {
        if (user.email === currentUser.email) {
          return { ...user, booked: currentUser.booked };
        }
        return user;
      });

      localStorage.setItem('users', JSON.stringify(updatedUsers));
    } else {
      alert('Movie is already added ');
    }
  }

  public removeBooked(movieId: number) {
    const currentUser = this.getCurrentUser();
    const updatedBooked = currentUser.booked.filter(
      (booked) => booked.movie?.id !== movieId
    );

    if (updatedBooked.length !== currentUser.booked.length) {
      currentUser.booked = updatedBooked;
      const allUsers = this.retrieveAllUsers();
      const updatedUsers = allUsers.map((user) => {
        if (user.email === currentUser.email) {
          return { ...user, booked: currentUser.booked };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      alert('Movie successfully removed');

    }
  }

  public calculatePrice(): number {
    const currentUser = this.getCurrentUser()
    const totalPrice = currentUser.booked.reduce((total, booked) =>{
        if(booked.movie){
            total +=Number(booked.movie.price || 0)
        }
        return total
    }, 0)
    return totalPrice
  }

  public bookMovie(movie: MovieModel) {
    this.addToBooked(movie);
  }
  
}
