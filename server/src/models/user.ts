import mongoose, { Document, Schema } from "mongoose";

// Define the interface for your document
interface IUser extends Document {
  username: string;
  email: string;
  password?: string;
  createdAt: Date;
  addition?: {
    num: number;
    digit: number;
    level: number;
  };
  subtract?: {
    num: number;
    digit: number;
    level: number;
  };
  divide?: {
    num: number;
    digit: number;
    level: number;
  };
  multiplication?: {
    num: number;
    digit: number;
    level: number;
  };
}

// Define the Mongoose schema
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  addition: {
    num: { type: Number,default:0 },
    digit: { type: Number,default:0  },
    level: { type: Number,default:0  },
  },
  subtract: {
    num: { type: Number,default:0  },
    digit: { type: Number,default:0  },
    level: { type: Number,default:0  },
  },
  divide: {
    num: { type: Number,default:0  },
    digit: { type: Number,default:0  },
    level: { type: Number,default:0  },
  },
  multiplication: {
    num: { type: Number,default:0  },
    digit: { type: Number,default:0  },
    level: { type: Number,default:0  },
  },
});

// Create and export the Mongoose model
const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
