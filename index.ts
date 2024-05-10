//#! /usr/bin/env node
import {differenceInSeconds} from "date-fns";
import inquirer from "inquirer"
 const answer = await inquirer.prompt({
    type : "number",
    name : "userInput",
    message : "please! enter amount of second",
    validate : (input:any) => {
      if(isNaN(input)){
         return "please enter valid number"
      }else if (input >60){
         return "seconds must be in 60"
      }else{
         return true;
      }
    }
 });

 let input= answer.userInput;
 function startTime(value:number){
    const initTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(initTime);
 
   setInterval(() => {
    const currentTime = new Date();
    const timeDiff = differenceInSeconds(intervalTime , currentTime);
    if(timeDiff <= 0 ){
        console.log("Timer got Expired !");
        process.exit();
    }const min = Math.floor((timeDiff%(3600*24))/3600);
     const sec = Math.floor(timeDiff % 60);
     console.log(`${min.toString().padStart(2,"0")} : ${sec}`);
   } , 1000);
  }
  startTime(input);
 
 

