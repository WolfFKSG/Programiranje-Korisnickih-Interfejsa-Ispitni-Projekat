import { Injectable } from "@angular/core";
import { MovieModel } from "../models/movie.model";
import { SearchModel } from "../models/search.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MovieService {

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

public getMovieId(id: number){
  var movieId: MovieModel;
  this.dummyMovieList.forEach(movie => {
    if( movie.id == id)
      movieId = movie;
  })
}

public getSpecMovieId(ids: number[]): Observable<{content: MovieModel[]}> {
  const movid: MovieModel[] = this.dummyMovieList.filter(
    movie => ids.includes(movie.id))
    return of ({
      content: movid
    })
}

public getActors() {
  const actors: string[] = []
  this.dummyMovieList.forEach(movie => {
    movie.actor.forEach(actor => {
      if (!actors.includes(actor)){
        actors.push(actor)
      }
    })
  })
  return actors
}

public getGenre(){
  const genres: string[] = []
  this.dummyMovieList.forEach(movie => {
    movie.genre.forEach(genre => {
      if (!genres.includes(genre)) {
          genres.push(genre)
        }
      })
    })
  return genres
}

public getDirector(){
  const directors: string[] = []
  this.dummyMovieList.forEach(movie => {
      if (!directors.includes(movie.director)) {
          directors.push(movie.director)
        }
    })
  return directors
}


public getSpecificMovie(id:number){
  return this.dummyMovieList.find(movie => movie.id == id);
}

public getMovieName(movie: MovieModel){
  return movie.name
}

public getSpecificSearchMovie(name: any): Observable<{content: MovieModel[]}> {
  const specmov = this.dummyMovieList.filter(
    movie => movie.name == name)
  return of ({
    content: specmov
  })
}


public getSearchCriteria():SearchModel {
  if(!sessionStorage.getItem('search'))
    sessionStorage.setItem('search', JSON.stringify({
      name: null,
      genre:  null,
      duration: null,
      director: null,
      actor: null,
      release: null,
      starts:  null,
      rating:  null,
      price: null
      }))
      return JSON.parse(sessionStorage.getItem('search')!)
}

public saveSearchCriteria(search: SearchModel) {
  sessionStorage.setItem('search', JSON.stringify(search))
}

public getMoviesByCriteria(criteria: SearchModel): Observable<{ content: MovieModel[] }> {
  const filteredMovies = this.dummyMovieList.filter(movie => {
    let matches = true;

    if (criteria.name && !movie.name.includes(criteria.name)) {
      matches = false;
    }
    if (criteria.genre && !movie.genre.some(genre => genre.includes(criteria.genre!))) {
      matches = false;
    }
    if (criteria.duration && !movie.duration.includes(criteria.duration)) {
      matches = false;
    }
    if (criteria.director && !movie.director.includes(criteria.director)) {
      matches = false;
    }
    if (criteria.actor && !movie.actor.some(actor => actor.includes(criteria.actor!))) {
      matches = false;
    }
    if (criteria.release && movie.releasedAt !== criteria.release) {
      matches = false;
    }
    if (criteria.starts && movie.startsAt !== criteria.starts) {
      matches = false;
    }
    if (criteria.rating && movie.rating !== criteria.rating) {
      matches = false;
    }
    return matches;
  });

  return of({ content: filteredMovies });
}

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
      price: 10,
      rating: 79, 
      description: 'A young boy discovers he is a wizard on his 11th birthday and begins attending Hogwarts School of Witchcraft and Wizardry, where he uncovers his magical heritage and faces dark forces.' 
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
      price: 11,
      rating:  77,
      description: 'Earth’s mightiest heroes, including Iron Man, Thor, and Captain America, come together to stop Loki and his alien army from invading Earth, forming an iconic superhero team.'
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
      price: 5,
      rating:  85,
      description: "In the epic conclusion of the trilogy, Frodo and Sam reach Mount Doom to destroy the One Ring, while Aragorn must unite the kingdoms of men to face Sauron's final assault."
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
      price: 15,
      rating: 59,
      description: 'A travel documentary series that explores unique cultures and breathtaking landscapes around the world, showcasing the beauty and diversity of our planet through personal stories and adventures.'
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
      price: 10,
      rating:  63,
      description: 'In a dystopian future where all crime is legal for one night each year, a family must defend themselves from intruders during the annual Purge, testing their morals and survival instincts.'      
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
      price: 8,
      rating:  77,
      description: "Harry returns to Hogwarts amidst rising darkness, forming a secret group to combat Voldemort's return while facing bureaucratic obstacles and personal challenges."      
},
  {
      id: 7,
      name: "Harry Potter and the Half-Blood Prince" , 
      genre: ["Adventure", "Fantasy"],
      duration: "2:33",
      director: "David Yates",
      actor: ["Daniel Radcliffe", "Emma Watson"],
      releasedAt: "15/7/2009" ,
      startsAt: '24.12.2024',
      price: 8,
      rating:  77,
      description: 'As Voldemort’s power grows, Harry and Dumbledore delve into the dark past of the Dark Lord to find a way to defeat him, while personal relationships evolve at Hogwarts.'      
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
      price: 5,
      rating:  84,
      description: 'A young hobbit, Frodo, is entrusted with a powerful ring that must be destroyed. He forms a fellowship with diverse allies to embark on a perilous journey across Middle-earth.'      
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
      price: 5,
      rating:  84,
      description: 'The fellowship is divided as they face new threats; Frodo and Sam continue towards Mordor, while Aragorn, Legolas, and Gimli battle against Saruman’s forces.'      
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
      price: 10,
      rating:   83,
      description: 'After the devastating events of Infinity War, the surviving Avengers unite for a final battle against Thanos, seeking to reverse the destruction he caused and restore balance to the universe.'     
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
      price: 15,
      rating: 86,
      description: 'A skilled thief who specializes in corporate espionage by infiltrating dreams is given a chance to have his criminal past erased if he can successfully plant an idea in a target’s subconscious.'
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
      price: 10,
      rating: 87,
      description: 'A computer hacker discovers that reality is a simulated construct created by sentient machines. He joins a rebellion to fight against the machines and uncover the truth about his existence.'
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
      price: 8,
      rating: 91,
      description: 'A theme park populated by cloned dinosaurs faces disaster when the creatures escape and wreak havoc, forcing its creators and visitors to fight for survival in a prehistoric world.'
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
      price: 10,
      rating: 88,
      description: 'Young lion cub Simba struggles to accept his royal destiny after the death of his father, Mufasa. He embarks on a journey of self-discovery and redemption to reclaim his rightful place as king.'
  },
  {
      id: 15,
      name: "Cars",
      genre: ["Animated", "Adventure"],
      duration: "1:57",
      director: "John Lasseter",
      actor: ["Owen Wilson", "Bonnie Hunt"],
      releasedAt: "09/06/2006",
      startsAt: "25.10.2024",
      price: 10,
      rating: 74,
      description: 'A race car named Lightning McQueen finds himself stranded in a small town and learns valuable life lessons about friendship and humility while trying to get back to the racing circuit.'
  }

]

}