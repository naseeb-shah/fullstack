import { buildProblem } from "../helpers/buildProblem";
import AttendanceModel from "../models/attandance";
export const getProblem = async (data: any, id: string) => {
  let { type, num, digit, correct } = data;
  if (correct) {
    const findAttendance: any = await AttendanceModel.findOne({ userId: id });
    if (!findAttendance) {
      let problemData = {};
      if (type == "+") {
        problemData = {
          addition: {
            num: 1,
            digit: digit,
            level: 0,
          },
        };
      } else if (type == "-") {
        problemData = {
          subtract: {
            num: 1,
            digit: digit,
            level: 0,
          },
        };
      } else if (type == "*") {
        problemData = {
          multiplication: {
            num: 1,
            digit: digit,
            level: 0,
          },
        };
      } else if (type == "/") {
        problemData = {
          divide: {
            num: 1,
            digit: digit,
            level: 0,
          },
        };
      }
      const createAttendance = await AttendanceModel.create({
        userId: id,
        ...problemData,
      });
    }else{
    if (type == "+") {
      findAttendance.addition.num = findAttendance.addition.num + 1;
      let numberProblem = findAttendance.addition.num;
      if (numberProblem > 20) {
        findAttendance.addition.digit = Math.trunc(numberProblem / 20);
        digit = findAttendance.addition.digit;
      }
      num=numberProblem

    } else if (type == "-") {
      findAttendance.subtract.num = findAttendance?.subtract?.num + 1;
      let numberProblem = findAttendance.subtract.num;
      if (numberProblem > 20) {
        findAttendance.subtract.digit = Math.trunc(numberProblem / 20);
        digit = findAttendance.subtract.digit;
      }
      num=numberProblem
    } else if (type == "/") {
      findAttendance.divide.num = findAttendance?.divide?.num + 1;
      let numberProblem = findAttendance.divide.num;
      if (numberProblem > 20) {
        findAttendance.divide.digit = Math.trunc(numberProblem / 20);
        digit = findAttendance.divide.digit;
      }
      num=numberProblem

    } else if (type == "*") {
      findAttendance.multiplication.num =
        findAttendance?.multiplication?.num + 1;
      let numberProblem = findAttendance.multiplication.num;
      if (numberProblem > 20) {
        findAttendance.multiplication.digit = Math.trunc(numberProblem / 20);
        digit = findAttendance.multiplication.digit;
      }
      num=numberProblem

    }


}
await findAttendance.save()
  }

  return buildProblem(type, +num, +digit);
};
 export const wrongAnswer=async(data:any,id:string)=>{

    try{

        let doc= await AttendanceModel.findOne({userId:id})
        if(doc){
            if(!doc?.wrongProblems){
                doc.wrongProblems=[data]
            }else{
                doc.wrongProblems.push(data)
            }
             await doc.save()
        }else{

              await AttendanceModel.create({
                userId:id,
                wrongProblems:[data]
              })
        }
return true

    }catch(e){
        throw e
    }
 }