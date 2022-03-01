import { model, Schema, ObjectId } from 'mongoose';

export interface IActor {
    id: ObjectId,
    firstName: string,
    middleName: string,
    lastName: string,
    birthDate: Date,
    birthPlace: string,
    description: string
}

export const ActorSchema = new Schema<IActor>({
    id: { type: Schema.Types.ObjectId, required: true },
    firstName: { type: Schema.Types.String, required: true },
    middleName: { type: Schema.Types.String, required: false },
    lastName: { type: Schema.Types.String, required: true },
    birthDate: { type: Schema.Types.Date, required: true },
    birthPlace: { type: Schema.Types.String, required: false },
    description: { type: Schema.Types.String, required: true }
}, {
    autoIndex: true
});