let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]
}
//name,age,gender,breed,service,owner name, contact phone
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
//get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");

function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value);
    console.log(thePet);
    //push the pet into the array
    petSalon.pets.push(thePet);
    //clear the inputs
    clearInputs();
}

function clearInputs(){
    inputName.value="";

}
//Create three pets
let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-555");
let scrappy = new Pet("Scrappy",40,"Male","Mixed","Nails cut"," Shaggy","555-555-555");
petSalon.push(scooby,scrappy);