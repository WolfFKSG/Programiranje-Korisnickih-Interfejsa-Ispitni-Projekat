import { Injectable } from "@angular/core";
import { MovieModel } from "../models/movie.model";

@Injectable({
    providedIn: 'root'
})

export class MovieService {
  static getAllMovies(): MovieModel[] {
    throw new Error('Method not implemented.');
  }

    private static instance: MovieService


    private constructor() { }
  
    public static getInstance() {
      if (MovieService.instance == null)
        MovieService.instance = new MovieService()
  
      return MovieService.instance;
}

public getAllMovies() {
  return this.dummyMovieList;
}

public getMovieId(id: number) {
  var movieId: MovieModel;
  this.dummyMovieList.forEach(movie => {
    if( movie.id == id)
      movieId = movie;
  })
}

public getMovieName(movie: MovieModel){
  return movie.name
}

// public filterMovies(movies: MovieModel, words:string[]):MovieModel[] {
//   return movies.filter
// }


public dummyMovieList: Array<MovieModel> = [
  {
      id: 1,
      name:  "Harry Potter And The Philosophers Stone",
      genre: ["Adventure", "Fantasy"],
      duration: "2:32" ,
      director: "Chris Columbus",
      actor: ["Daniel Radcliffe", "Emma Watson"],
      releasedAt: '16/11/2001',
      startsAt: '25.10.2024',
      price: '10',
      rating: 79  
},
  {
      id: 2,
      name: "The Avengers", 
      genre: ["Action", "Science Fiction"],
      duration: "2:23",
      director: "Joss Whedon",
      actor: ["Chris Evans", "Robert Downey Jr."],
      releasedAt:"04/05/2012" ,
      startsAt: '18.10.2024',
      price: '11',
      rating:  77      
},
  {
      id: 3,
      name: "The Lord of the Rings: The Return of the King ", 
      genre: ["Adventure", "Action", "Fantasy"],
      duration: "3:21",
      director: "Peter Jackson",
      actor: ["Elijah Wood", "Ian McKellen"],
      releasedAt: '17/12/2003',
      startsAt: '22.11.2024',
      price: '5',
      rating:  85      
},
  {
      id: 4,
      name: "Lonely Planet", 
      genre: ["Romance", "Drama"],
      duration: "1:36",
      director: "Susannah Grant",
      actor: ["Liam Hemsworth", "Lena Headey"],
      releasedAt:'11/10/2024' ,
      startsAt: '11.10.2024',
      price: '15',
      rating: 59       
},
  {
      id: 5,
      name: "The Purge" , 
      genre: ["Science Fiction", "Horror", "Thriller"] ,
      duration: "1:26",
      director: "James DeMonaco",
      actor: ["Laura Dern", "Ethan Hawke"],
      releasedAt: '6/6/2013' ,
      startsAt: '25.12.2024',
      price: '10',
      rating:  63      
},
  {
      id: 6,
      name: "Harry Potter and the Order of the Phoenix",         
      genre: ["Adventure", "Fantasy"],
      duration: "2:18",
      director: "David Yates",
      actor: ["Daniel Radcliffe", "Emma Watson"],
      releasedAt: '12/7/2007',
      startsAt: '23.12.2024',
      price: '8',
      rating:  77      
},
  {
      id: 7,
      name: "Harry Potter and the Half-Blood Prince" , 
      genre: ["Adventure", "Fantasy"],
      duration: "2:33",
      director: "Daid Yates",
      actor: ["Daniel Radcliffe", "Emma Watson"],
      releasedAt: "15/7/2009" ,
      startsAt: '24.12.2024',
      price: '8',
      rating:  77      
},
  {
      id: 8,
      name: "The Lord of the Rings: The Fellowship of the Ring", 
      genre: ["Adventure", "Action", "Fantasy"],
      duration: "2:59",
      director: "Peter Jackson",
      actor: ["Elijah Wood", "Ian McKellen"],
      releasedAt: "19/12/2001",
      startsAt: '20.11.2024',
      price: '5',
      rating:  84      
},
  {
      id: 9,
      name: "The Lord of the Rings: The Two Towers", 
      genre: ["Adventure", "Action", "Fantasy"],
      duration: "2:59",
      director: "Peter Jackson",
      actor: ["Elijah Wood", "Ian McKellen"],
      releasedAt: "18/12/2002",
      startsAt: "21.11.2024",
      price: '5',
      rating:  84      
},
  {
      id: 10,
      name: "Avengers: Endgame",       
      genre: ["Adventure", "Action", "Science Fiction"],
      duration: "3:01",
      director: "Anthony Russo",
      actor: ["Robert Downey Jr.", "Chris Evans"],
      releasedAt: "24/4/2019",
      startsAt: '25.12.2024',
      price: '10',
      rating:   83     
}, 
  {
      id: 11,
      name: "Inception",
      genre: ["Action", "Science Fiction"],
      duration: "2:28",
      director: "Christopher Nolan",
      actor: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      releasedAt: "16/07/2010",
      startsAt: "25.10.2024",
      price: "15",
      rating: 86
  },
  {
      id: 12,
      name: "The Matrix",
      genre: ["Action", "Science Fiction"],
      duration: "2:16",
      director: "Lana Wachowski, Lilly Wachowski",
      actor: ["Keanu Reeves", "Carrie-Anne Moss"],
      releasedAt: "31/03/1999",
      startsAt: "25.10.2024",
      price: "10",
      rating: 87
  },
  {
      id: 13,
      name: "Jurassic Park",
      genre: ["Adventure", "Science Fiction"],
      duration: "2:07",
      director: "Steven Spielberg",
      actor: ["Sam Neill", "Laura Dern"],
      releasedAt: "11/06/1993",
      startsAt: "25.10.2024",
      price: "8",
      rating: 91
  },
  {
      id: 14,
      name: "The Lion King",
      genre: ["Animated", "Adventure"],
      duration: "1:58",
      director: "Roger Allers, Rob Minkoff",
      actor: ["Matthew Broderick", "James Earl Jones"],
      releasedAt: "15/06/1994",
      startsAt: "25.10.2024",
      price: "10",
      rating: 88
  }

]

}