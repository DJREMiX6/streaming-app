/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Schema, ObjectId } from 'mongoose';
export interface IVip {
    id: ObjectId;
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: Date;
    birthPlace: string;
    description: string;
}
export declare const VipSchema: Schema<IVip, import("mongoose").Model<IVip, any, any, any>, any, any>;
export declare const Vip: import("mongoose").Model<IVip, {}, {}, {}>;
