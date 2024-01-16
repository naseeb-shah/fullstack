import { generateNumber } from "./generatenumber"

export  const buildProblem=(type:string,num:number,digit:number)=>{
    try{

        let firstNumber=0
        let secondNumber=0
if(type=="+"){
     firstNumber=generateNumber(digit)
     secondNumber=generateNumber(digit)
}else if(type=="*"){
     firstNumber=generateNumber(digit+2)
     secondNumber=generateNumber(digit)
}else if(type=="-"){
     firstNumber=generateNumber(digit)
     secondNumber=generateNumber(digit)
     if(firstNumber<secondNumber){
        firstNumber=firstNumber+(secondNumber-firstNumber)+50
     }
}else if(type=="/"){
    firstNumber=generateNumber(digit*2)
    secondNumber=generateNumber(digit)
}
 
return {
    num:firstNumber,
    num2:secondNumber,
    type,
    number:num
}
    }catch(e){
console.error(e)
    }

  }