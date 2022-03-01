import { Schema, ObjectId } from 'mongoose';

export interface IGenre {
    id: ObjectId,
    value: string
}

export const GenreSchema = new Schema<IGenre>({
    id: { type: Schema.Types.ObjectId, required: true },
    value: { type: Schema.Types.String, required: true }
}, {
    autoIndex: true
});