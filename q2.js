//Q2. Write a JavaScript program to filter the hospitals according to:

let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":"Yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    "availability":"No"
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    "availability":"Yes"
    }
]

//a) Number of Beds > 200
var noofbeds = hospitals.filter((hospital)=> hospital.noOfBeds > 200);
console.log("Number of Beds " + JSON.stringify(noofbeds, null, 2));


//b) Availability of Beds = Yes
var Availabilityofbeds = hospitals.filter((hospital)=> hospital.availability == "Yes");
//console.log("Availability of Beds  " + Availabilityofbeds);
console.log("Availability of Beds  " + JSON.stringify(Availabilityofbeds, null, 2));


//c) Location = Pune
var Location = hospitals.filter((hospital)=> hospital.location == "Pune");
//console.log("Location " + Location);
console.log("Location " + JSON.stringify(Location, null, 2));