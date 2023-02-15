import mongoose from "mongoose";
import { Request } from "express";

export interface Iuser extends mongoose.Document{
    name: string,
    email: string,
    password: string,
    comfirm: string
}

export interface Authuser extends Request{
    user: Iuser
}