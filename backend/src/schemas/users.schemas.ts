import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Task } from './tasks.schema';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: true, required: true, trim: true })
  name: string;
  @Prop({ unique: true, required: true, trim: true })
  email: string;
  @Prop({ unique: true, required: true, trim: true })
  password: string;
  @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Tasks'}]})
  tasks:Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
