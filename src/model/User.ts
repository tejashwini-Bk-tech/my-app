import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAT: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAT: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  varifyCode: string;
  varifycodeExpiry:Date;
  isvarified:boolean,
  isAcceptingMessage: boolean;
  messages: Message[];
  
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique:true,
    match:[/.+\@.+\..+/, "use a valid email"]
  },
  password:{
    type: String,
    required: [true, "password is required"]
  },
  varifyCode:{
    type: String,
    required: [true, "varifycode is required"],
  },
  varifycodeExpiry:{
    type: Date,
    required: [true, "email is required"],
  },
  isvarified:{
    type: Boolean,
    default:false
  },
  isAcceptingMessage:{
    type: Boolean,
    default:false
  },
  messages:[MessageSchema]
  
});

const UserModel = (mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)


export default User