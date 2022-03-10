import { Schema as mongoSchema, Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Genre, GENRE_COLLECTION_NAME } from './genre.model';
import { Vip, VIP_COLLECTION_NAME } from './vip.model';

export const MOVIE_COLLECTION_NAME = 'Movie';

export type MovieDocument = Movie & Document;

@Schema({ autoIndex: true, autoCreate: true, collection: MOVIE_COLLECTION_NAME })
export class Movie {

    @Prop({ required: true, type: mongoSchema.Types.ObjectId })
    id: mongoSchema.Types.ObjectId;

    @Prop({ required: true, type: mongoSchema.Types.String })
    title: mongoSchema.Types.String;

    @Prop({ required: true, type: mongoSchema.Types.String })
    description: mongoSchema.Types.String;

    @Prop({ required: true, type: [{ type: mongoSchema.Types.ObjectId, ref: GENRE_COLLECTION_NAME }] })
    genres: Genre[];

    @Prop({ required: true, type: mongoSchema.Types.Date })
    releaseDate: mongoSchema.Types.Date;

    @Prop({ required: true, type: mongoSchema.Types.Number })
    duration: mongoSchema.Types.Number;

    @Prop({ required: true, type: [{ type: mongoSchema.Types.ObjectId, ref: VIP_COLLECTION_NAME }] })
    directors: Vip[];

    @Prop({ required: true, type: [{ type: mongoSchema.Types.ObjectId, ref: VIP_COLLECTION_NAME }] })
    actors: Vip[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);

/* export const MovieSchema = new Schema<IMovie>({
    id: { type: Schema.Types.ObjectId, required: true },
    title: { type: Schema.Types.String, required: true },
    description: { type: Schema.Types.String, required: true },
    genres: { type: [GenreSchema], required: true },
    releaseDate: { type: Schema.Types.Date, required: true },
    duration: { type: Schema.Types.Number, required: true },
    directors: { type: [VipSchema], required: true },
    actors: { type: [VipSchema], required: true }
}, {
    autoIndex: true
}); */
/* 
export const Movie = model('Movie', MovieSchema); */