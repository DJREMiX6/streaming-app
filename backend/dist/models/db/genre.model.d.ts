/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Schema, ObjectId } from 'mongoose';
export interface IGenre {
    id: ObjectId;
    value: string;
}
export declare const GenreSchema: Schema<IGenre, import("mongoose").Model<IGenre, any, any, any>, any, any>;
export declare const Genre: import("mongoose").Model<IGenre, {}, {}, {}>;
