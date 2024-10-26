export interface MovieModel {
    id: number,
    name: string,
    genre: Array<'Adventure'| 'Action'| 'Fantasy'| 'Science Fiction'|'Romance'| 'Drama'| 'Horror'|'Thriller' | 'Animated'>,
    duration: string,
    director: string,
    actor: Array<'Daniel Radcliffe'| 'Emma Watson'| 'Robert Downey Jr.'| 'Chris Evans'|'Elijah Wood'| 'Ian McKellen'|'Liam Hemsworth'| 'Laura Dern'|'Ethan Hawke'| 'Lena Headey' | 'Leonardo DiCaprio'| 'Joseph Gordon-Levitt'
                | 'Keanu Reeves'| 'Carrie-Anne Moss' | 'Sam Neill' |'Laura Dern' | 'Matthew Broderick' | 'James Earl Jones'>,
    releasedAt: string,
    startsAt: string,
    price: string,
    rating: number

}

