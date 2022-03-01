import { Schema, model, ObjectId } from 'mongoose';
import { GenreSchema, IGenre } from './genre.model';

interface IMovie {
    id: ObjectId,
    title: string, 
    description: string, 
    genres: [IGenre], 
    releaseDate: Date, 
    duration: number, 
    directors: [string], 
    actors: [string]
}