import mongoose, { Document, Schema, Types } from 'mongoose';

interface IWrongProblem {
  num: number;
  num2: number;
  type: string;
}

interface IAttendance extends Document {
  userId: Types.ObjectId; // Reference to User model

  addition: {
    num: number;
    digit: number;
    level: number;
  };
  subtract: {
    num: number;
    digit: number;
    level: number;
  };
  divide: {
    num: number;
    digit: number;
    level: number;
  };
  multiplication: {
    num: number;
    digit: number;
    level: number;
  };
  wrongProblems?: IWrongProblem[];
}

const wrongProblemSchema = new Schema<IWrongProblem>({
  num: { type: Number, required: true },
  num2: { type: Number, required: true },
  type: { type: String, required: true },
});

const attendanceSchema = new Schema<IAttendance>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model

  addition: {
    num: { type: Number, default: 0 },
    digit: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
  },
  subtract: {
    num: { type: Number, default: 0 },
    digit: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
  },
  divide: {
    num: { type: Number, default: 0 },
    digit: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
  },
  multiplication: {
    num: { type: Number, default: 0 },
    digit: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
  },
  wrongProblems: [wrongProblemSchema], // Array of wrongProblemSchema
  
}, { timestamps: true });

const AttendanceModel = mongoose.model<IAttendance>('Attendance', attendanceSchema);

export default AttendanceModel;
