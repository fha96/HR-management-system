'use strict';

//Creat a construstor
const employeeArray=[];
function EmployeeInfo(fullName,depatment,level,img){
    this.id = Math.floor(1000+Math.random()*9000);
    this.fullName=fullName;
    this.depatment=depatment;
    this.level=level;
    this.img=img;
    employeeArray.push(this);
}
EmployeeInfo.prototype.calculateSalary = function(){
    switch (this.level){
        case "senior":
            let seniorSalary=Math.floor((Math.floor(1500+(Math.random()*500)))*0.925);
            return  seniorSalary;
           break;
        case "mid-senior":
            let midSeniorSalary=Math.floor((Math.floor(1000+(Math.random()*500)))*0.925);
            return  midSeniorSalary;
            break;
            case "junior":
               let juniorSalary= Math.floor((Math.floor(500+(Math.random()*500)))*0.925);
                return juniorSalary;
                break;
    }
}
document.write("Employee"+"   :   "+"Salary");
EmployeeInfo.prototype.renderInfo = function(){
    document.write(`<p>${this.fullName} : ${this.calculateSalary()} JOD </p>`);
}

const gazi =new EmployeeInfo("Ghazi Samer","Administration","senior");
const lana =new EmployeeInfo("Lana Ali","Finance","senior");
const tamara =new EmployeeInfo("Tamara Ayoub","Marketing","senior");
const safi =new EmployeeInfo("Safi Walid","Administration","mid-senior");
const omar =new EmployeeInfo("Omar Ziad","Development","senior");
const rana =new EmployeeInfo("Rana Saleh","Development","junior");
const hadi =new EmployeeInfo("Hadi Ahmad","Finance","mid-senior");

// console.log(lana.calulateSalary());
// console.log(tamara.calulateSalary());
// gazi.renderInfo();
// lana.renderInfo();
// tamara.renderInfo();
function renderHomePage(){
for(let i=0;i<employeeArray.length;i++){
    // console.log(employeeArray[i]);
    employeeArray[i].renderInfo();
}
}
renderHomePage();