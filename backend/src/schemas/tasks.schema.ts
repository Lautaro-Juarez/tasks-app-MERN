import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './users.schemas';

@Schema({
  timestamps: true,
})
export class Task {
  
  @Prop({ unique: true, required: true, trim: true })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ default: true })
  done: boolean;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
