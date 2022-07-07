'use strict';

//Creat a construstor
const employeeArray=[];
const parentEl =document.getElementsByClassName("card");
console.log(parentEl);
const parentEl2=document.getElementsByClassName("container");
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

// document.write("Employee"+"   :   "+"Salary");
EmployeeInfo.prototype.renderInfo = function(){
    // document.write(`<p>${this.fullName} : ${this.calculateSalary()} JOD </p>`);
    // get an element
   // const imgElement=document.getElementById("prsImg");
    const imgElement=document.createElement("img");
    const nameEl=document.createElement("h4");
    const departInfo=document.createElement("p");
    const salaryInfo=document.createElement("p");
    //add content
    departInfo.textContent=this.depatment;
    salaryInfo.textContent=this.calculateSalary();
    nameEl.textContent=this.fullName;
    imgElement.src=this.img;
    imgElement.alt=this.fullName;
    imgElement.style.width="23%";
    //append to dom
    parentEl[0].appendChild(imgElement);
    parentEl2[0].appendChild(nameEl);
    parentEl2[0].appendChild(departInfo);
    parentEl2[0].appendChild(salaryInfo);

}

const gazi =new EmployeeInfo("Ghazi Samer","Administration","senior","../assets/Ghazi.jpg");
const lana =new EmployeeInfo("Lana Ali","Finance","senior","../assets/Lana.jpg");
const tamara =new EmployeeInfo("Tamara Ayoub","Marketing","senior","../assets/Tamara.jpg");
const safi =new EmployeeInfo("Safi Walid","Administration","mid-senior","../assets/Safi.jpg");
const omar =new EmployeeInfo("Omar Ziad","Development","senior","../assets/Omar.jpg");
const rana =new EmployeeInfo("Rana Saleh","Development","junior","../assets/Rana.jpg");
const hadi =new EmployeeInfo("Hadi Ahmad","Finance","mid-senior","../assets/Hadi.jpg");


function renderHomePage(){
for(let i=0;i<employeeArray.length;i++){
    // console.log(employeeArray[i]);
    employeeArray[i].renderInfo();
}
}
renderHomePage();