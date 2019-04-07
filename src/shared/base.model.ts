import { Document } from 'mongoose';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export interface BaseModel extends Document {
    createdAt?: Date;
    updatedAt?: Date;
}

export class BaseModelvm {
    @ApiModelPropertyOptional({ type: String, format: 'date-time' })
    createdAt?: Date;

    @ApiModelPropertyOptional({ type: String, format: 'date-time'})
    updatedAt?: Date;

    @ApiModelPropertyOptional() 
    id?: string;
}

export const schemaOptions = {
    toJSON: {
        virtuals: true,
        getters: true
    }
}