export interface MovieModel {
    id: number,
    name: string,
    genre: Array<'Adventure'| 'Action'| 'Fantasy'| 'Science Fiction'|'Romance'| 'Drama'| 'Horror'|'Thriller'>,
    duration: string,
    director: string,
    actor: Array<'Daniel Radcliffe'| 'Emma Watson'| 'Robert Downey Jr.'| 'Chris Evans'|'Elijah Wood'| 'Ian McKellen'|'Liam Hemsworth'| 'Laura Dern'|'Ethan Hawke'| 'Lena Headey'>,
    releasedAt: string,
    startsAt: string,
    price: string,
    rating: number

}

