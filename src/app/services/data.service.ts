import { Injectable } from "@angular/core";
import { MovieModel } from "../models/movie.model";

@Injectable({
    providedIn: 'root'
})

export class DataService {












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
    }
        
    ]

}