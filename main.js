/////1
// let arr = ["tip1","tip2","tip3","tip4","tip5","tip6","tip7","tip8","tip9","tip10"]
// let random = parseInt(Math.random()*10)
// document.write(arr[random])
//////////////////////////////////////////////
// let arr = [
//   { name: "omar", degree: 90 },
//   { name: "omar1", degree: 100 },
//   { name: "omar2", degree: 60 },
//   { name: "Amr", degree: 50 },
//   { name: "omar4", degree: 40 },
//   { name: "omar5", degree: 30 },
//   { name: "omar6", degree: 95 },
// ];
// console.log(arr);

// let student = arr.filter(student => student.degree >= 90 && student.degree <= 100);
// console.log(student);
// let student2 = arr.filter(student2 => student2.degree < 60);
// console.log(student2);
// arr.push({name:"omar50",degree:30})
// console.log(arr);

// for (let std in arr)
//     {
//     console.log(std + ": " + arr[std].name + ": " +arr[std].degree );
//     // console.log(std + ": " + arr[std].degree);
// }
// arr.pop();
// console.log(arr);
// for (let std of arr) {
    
//     console.log(std);
// }

// arr.sort((a,b)=>a.name.charCodeAt(0)-b.name.charCodeAt(0))
// console.log(arr);

// arr.splice(1,1,{name:"omaar", degree:20},{name:"omaar", degree:300})
// console.log(arr);

/////////////////////////////////////////////////////////
// var date1 = prompt("enter your birthdata like dd-mm-yyyy","15-01-2001")
//  if (date1.length ==10) {
//     if (date1.charAt(2)=="-" && date1.charAt(5)=="-" ){
//         var day = parseInt(date1.substring(0, 2), 10);
//         var month = parseInt(date1.substring(3, 5), 10) - 1;
//         var year = parseInt(date1.substring(6, 10), 10);
//         console.log("rigth")

//         var date = new Date(year, month, day);
//     }if (date.getDate() == day && date.getMonth() == month && date.getFullYear() == year) {
//         alert("The date you entered is: " + date.toDateString());
//     }else {
//         alert("Wong Date Format");
//     }
// }
//     else {
//         console.log("wrong")
//     }



//////////////////////////////////////////////////////
// function calc(){
//     let n = prompt("ener number");
//     if  (isNaN(n)) {
//         throw  "wrong"
//     }
//     else{
//         alert("The squareRoot is: " + n ** 0.5);
//     }
//     }


// try {
//     calc();
//   }
// catch(ro) {
//     alert("this is not number")
//   }


//////////////////////////////////////////////////////
// //5


// let fullName = prompt("enter your full name")
// let email =prompt("enter your email")

// function fullName() {
//     let fullNameRegex = /^[A-Za-z]{3,}(\s[A-Za-z]{3,})*$/;
//     let fullName;
//     do {
//         fullName = prompt("Please enter your full name (at least 3 characters per part, separated by spaces):");
//         if (!fullNameRegex.test(fullName)) {
//             alert("Invalid full name! Please try again.");
//         }
//     } while (!fullNameRegex.test(fullName));  
//     alert("Valid full name!");
//     console.log("true")
// }

// function Email() {
//     let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.eg|net\.eg|edu\.eg|org\.eg)$/;
//     let email;
//     do {
//         email = prompt("Please enter your email (must be from Egypt, e.g., name@domain.com.eg):");
//         if (!emailRegex.test(email)) {
//             alert("Invalid email! Please try again.");
//         }
//     } while (!emailRegex.test(email));  
//     alert("Valid email!");
//     console.log("true")
// }
// fullName();
// Email();

///6
let circleRadius= prompt("enter circle’s radius to calculate its area")
circleRadius = parseFloat(circleRadius)

let area = Math.PI * Math.pow(circleRadius, 2); 
console.log("The area of the circle is: " + area);


let value = prompt("enter your value to calculate its square root")
value = parseFloat(value)
let squareRoot = value ** 0.5
console.log("The squareRoot is: " + squareRoot);



