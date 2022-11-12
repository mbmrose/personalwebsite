let course1 = {code: "1620", coursename: "Web Tech", grade: "none"};
let course2 = {code: "1630", coursename: "Database", grade: "none"};
let course3 = {code: "1420", coursename: "Systems Admin", grade: "none"};

let courselist = [course1, course2, course3];

console.log(courselist);

let input = null;

do{
    input = prompt("Enter a 4 digit number!")}
    while(isNaN(input) == true || input.toString().length > 4 || input.toString().length < 4);


let check = false;
for (let mycourses of courselist){
    if (mycourses.code.includes(input)){
    console.log(`Yes, I am taking the course: ACIT - ${mycourses.code}, ${mycourses.coursename}`)
    check = true;
    }
}

if (check === false){
    courselist.push({code: `ACIT ${input}`, coursename: null})
    console.log(`Object '${input}' added to courselist`)
}