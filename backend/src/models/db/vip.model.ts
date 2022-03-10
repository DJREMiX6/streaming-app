import { Schema as mongoSchema, Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export const VIP_COLLECTION_NAME = 'Vip'

export type VipDocument = Vip & Document;

@Schema({ autoIndex: true, autoCreate: true, collection: VIP_COLLECTION_NAME })
export class Vip {

    @Prop({ required: true, type: mongoSchema.Types.ObjectId })
    id: mongoSchema.Types.ObjectId;

    @Prop({ required: true, type: mongoSchema.Types.String })
    firstName: string;

    @Prop({ required: false, type: mongoSchema.Types.String })
    middleName: string;

    @Prop({ required: true, type: mongoSchema.Types.String })
    lastName: string;

    @Prop({ required: true, type: mongoSchema.Types.Date })
    birthDate: Date;

    @Prop({ required: false, type: mongoSchema.Types.String })
    birthPlace: string;

    @Prop({ required: true, type: mongoSchema.Types.String })
    description: string;
}

export const VipSchema = SchemaFactory.createForClass(Vip);