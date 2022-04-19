// let students=[
//     {
//         //attr:value,
//         firstName:"Astrid",
//         lastName:"Batres-Guerrero",
//         age:25,
//         isActive:true
//     },
//     {
//         firstName:"Anthony",
//         lastName:"Lane",
//         age:22,
//         isActive:true
//     },
//     {
//         firstName:"Ben",
//         lastName:"Vance",
//         age:25,
//         isActive:false,
//         hobbies:["Listen Music","Read","Play Zelda"],
//         address:{
//             street:"Palm street",
//             zip:"22769",
//             number:"262-k"
//         }
//     }];

//object constructor(function)

//these are local vars <--------------------->
    function Students(fname,lname,age,isActive){
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
        this.isActive=isActive;
    }

let student1= new Students("Astrid","Batres-Guerrero",25,true);
let student2=new Students("Alexis","Aldrete",25,true);

console.log(student1,student2);

//Exercise: 
//Create an object contructor function and two objects





function displayStudent(){
    //travel the array
   let tmp="";
   let div=document.getElementById("students");
    //<------------  length =3 ------>
    for(let i=0;i<students.length;i++){
        //not working
        tmp+=`<li>${students[i].firstName}</li>`;
    }
    div.innerHTML=tmp;
}

//displayStudent();

