import mongoose from "mongoose";

 export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb+srv://naseebshah:naseebshahdeen@cluster0.b2nqg.mongodb.net/math?retryWrites=true&w=majority");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};