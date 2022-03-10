import { Document, Schema as mongoSchema} from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export const GENRE_COLLECTION_NAME = 'Genre';

export type GenreDocument = Genre & Document;
@Schema({ autoIndex: true, autoCreate: true, collection: GENRE_COLLECTION_NAME })
export class Genre {
    @Prop({ required: true, type: mongoSchema.Types.ObjectId })
    id: mongoSchema.Types.ObjectId;

    @Prop({ required: true, type: mongoSchema.Types.String })
    value: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);