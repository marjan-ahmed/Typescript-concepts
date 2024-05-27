// Program:
function Generate_Name(firstName: string, restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

// var employeeName = Generate_Name("Joseph", "Samuel", "Lucas", "MacKinzie"); // Error Occur 
// console.log(employeeName) 				

// Solution
function build_Name(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = build_Name("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);

// If you want to pass an ultimited arguments use rest parameters 
// rest parameters = [] (The rest parameters automatically converts in an Array)