let course1 = {code: "ACIT 1620", coursename: "Web Tech", grade: "none"};
let course2 = {code: "ACIT 1630", coursename: "Database", grade: "none"};
let course3 = {code: "ACIT 1420", coursename: "Systems Admin", grade: "none"};

let courselist = [{course1}, {course2}, {course3}];

console.log(courselist);


do{
    input = prompt("Enter a 4 digit number!")}
    while(isNaN(input) == true || input.toString().length > 4 || input.toString().length < 4);