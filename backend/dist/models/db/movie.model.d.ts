/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Schema, ObjectId } from 'mongoose';
import { IGenre } from './genre.model';
import { IVip } from './vip.model';
export interface IMovie {
    id: ObjectId;
    title: string;
    description: string;
    genres: [IGenre];
    releaseDate: Date;
    duration: number;
    directors: [IVip];
    actors: [IVip];
}
export declare const MovieSchema: Schema<IMovie, import("mongoose").Model<IMovie, any, any, any>, any, any>;
export declare const Movie: import("mongoose").Model<IMovie, {}, {}, {}>;
