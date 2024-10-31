import { MovieModel } from "./movie.model"

export interface UserModel {
    email: string
    name: string
    password: string,
    booked: BookedModel[]
}

export interface BookedModel {
    id: number,
    movie: null | MovieModel
    review: ReviewModel
}

export enum ReviewModel {
    NONE = 0,
    LIKED = 1,
    DISLIKED = 2
}