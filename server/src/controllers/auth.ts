import { AnyARecord } from "dns";
import jwt, { Secret } from "jsonwebtoken";

import UserModel from "../models/user";

import { error } from "console";
import AttendanceModel from "../models/attandance";


export const registerUser = async (data: any) => {
  try {
    const { username, email, password } = data;
    console.log(data);
    const user = await UserModel.create({ username, email, password });
    return {};
  } catch (e) {
    console.log(e);
  }
};

export const login = async (data: any) => {
  try {
    const { email, password } = data;
    let user = await UserModel.findOne({ email, password }).lean();
    const key: Secret = "micro2025";
    const token = jwt.sign({ email, id:user?._id }, key, { expiresIn: "15d" });
    if (!user) {
      return error;
    }
    if (user) {
      delete user.password;
    }
    return { token, user };
  } catch (e) {
    console.log(e);
  }
};
 export const profile=async(id:string)=>{
  try{
 const attendance= await AttendanceModel.findOne({userId:id}).lean()
 const user=await UserModel.find({_id:id}).lean()

 
 return {
  ...user,...attendance
 }
  }
catch(e){
  throw e
}
 }