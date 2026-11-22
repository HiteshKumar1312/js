// console.log("1"==1);
// console.log("1"===1);

const marvel = ["Ironman", "Captain America", "Wanda", "HawkEye", "Hulk", "Spider-Man", "Venom", "Vision", "Natasha", "Thor"]
console.log(marvel[0]);
console.log(marvel[1]);

for(let i = 0; i < marvel.length; i++){
    console.log(marvel[i]);
    
}



let student = {
    name :  "Hitesh",
    age : 23,
    branch : "CSE"
}
console.log(student.name);
console.log(student["name"]);

console.log(student.age);
console.log(student["age"]);

console.log(student.branch);
console.log(student["branch"]);


const myFunc = function(){
    console.log("Hello World");
    console.log("How are you Hitesh");
    
    
}
myFunc()

function add(a, b){
    console.log(a+b);
    
}
add(10,20)



