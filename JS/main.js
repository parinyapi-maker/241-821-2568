//console.log("Hello World!");
//console.log("This is a simple JavaScript file.");

//let fname = "JOhn";
//console.log("Name:",fname);
//let age = 30;
//let height = 5.9;

//fname = "Alice";
//console.log("Name:",fname);
//fname = "Bob";
//PI = 3.14159
//console.log("Name:", fname);
//console.log("Age:", age);
//console.log("Height:", height);

//let number1 = '10';
//let number2 = '3';

//let result1 = number1 + number2;
//console.log("ผลบวก =", result1);

//** 
// ==
// !=
// >
// <
// >=
// <=
// */ */

//let number1 = 5;
//let number2 = 3;
//let condition = number1 < number2;
//console.log("condition:", condition);

// if - else condition
//if (number1 > number2) {
  //  console.log('this is if');
//} else if (number1 < number2) {
  //  console.log('this is if');
//}

//else {
//    console.log('this is else');
//}

/**
 * Gread
 * >=80 = A
 * >=70 = B
 * >=60 = C
 * >=50 = D
 * <50 = F
 */

/** 
let scor = prompt('   ');
 if (scor >=80) {
    console.log('grade A');
 } else if (scor >=70) {
    console.log('grade B');
 } else if (scor >=60) {
    console.log('grade C');
 } else if (scor >=50) {
    console.log('grade D');
 } else {
    console.log('grade F');
 } 
*/

/**
 * && และ
 * || หรือ
 * ! not หรือ ไม่
 */

/** 
let number1 = 5
let number2 = 10

let condition1 = (number1 > 0) && (number2 > 0)
console.log("condition1:", condition1)
*/

/**
 * while
 * for
 */

/** 
*let counter = 0;
*while (counter <= 5) {
 *   counter = counter + 1;
  *  //counter +=1;
   * console.log("counter", counter);
*}
*/


/** 
let age1 = 25;
let age2 = 30;
let age3 = 35;

let ages = [25, 30, 35];
console.log(ages); //[25, 30, 35]
console.log(ages[1]);//30

ages = [40, 45, 50];
console.log(ages);

// ต่ออาเรย์
ages.push(55);
console.log(ages); //[40, 45, 50, 55]

//ความยาวเรย์
console.log(ages.length);

//ลบสมาชิค
SVGSetElement.prototype();
console.log(ages); //[40, 45, 50]

if(ages.includes(45)){
   console.log("พบ 45 ในอาเรย์");
}

let number = [90, 60, 80, 40, 50];
number.sort();
console.log(number);

let names = ["John", "Jane", "Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for (let i =0; i < names.length; i++){
   console.log(names[i]);
}

*/

/** 
let age = 30
let name = "John"
let grade = 'A'

console.log(Student);
console.log(student.name);
*/

/** 
let student = [{
   age: 20,
   name: "Emma",
   grade: 'B'
}]

for(let i = 0; i < student.length; i++){
   console.log("Student " + (i + 1) + ":");
   console.log("Name:" + student[i].name);
   console.log("Age:" + student[i].age);
   console.log("Grade:" + student[i].grade);
}

student.push({
   age: 21,
   name: "Olivia",
   grade: 'A'
})
   */

/** 
function calculat_grade(score){
   if (score >= 90) {
      return 'A';
   } else if (score >= 80){
      return 'B';
   }else if (score >= 70){
      return 'C';
   }else if (score >= 60){
      return 'D';
   }else{
      return 'F';
   }
   return grade;
}

let student_score = 85;
let student_grade = calculat_grade(student_score);
console.log("Student's grade is: " + student_grad);
*/

/** 
let score = [10, 20, 30, 40, 50];

for (let i = 0; i < score.length; i++){
   //console.log('Score at index ' + i + ': ' + score[i]);
   console.log("Score at index ${i} is ${score[i]}");
}
*/
/** 
score.forEach(() => {
   console.log('score', s);
})
   */
/** 
score[0] = score.map((s) => {
   return s * 2;
})

score.forEach((s) => {
   console.log('new score:', s);
})
*/

/** 
let score = [10, 20, 30, 40, 50];

let newScore = []

for (let index = 0; index <score.length; index++) {
   console.log('score', score[index])
   if (score[index] >= 30) {
      newScore.push(score[index])
   }
}

console.log('newScore :',newScore)

newScore.forEach((ns)=>{
   console.log('new score:', ns)
})
*/
/** 
let score = [10, 20, 30, 40, 50];

for (let index = 0; index <score.length; index++) {
   console.log('score', score[index])
}

let newScore = score.filter((s) => {
   return s >= 30
})

newScore.forEach((ns)=>{
   console.log('new score:', ns)
})
   */



//object + function
/** 
let students = [
   {
      name: 'aa',
      score: '50',
      grade: 'A',
   }
   ,
   {
      name: 'bb',
      score: '60',
      grade: 'B',
   }
]

console.log('Student ;', studentS[0])

let Student = students.find((s) => {
   if (s.name == 'bb'){
      return true
   }
})

let doublescore_student = students.map((s) => {
   s.score = s.score * 2
   return s
})

console.log('student:' ,student)
console.log(doublescore_student)

let highScore_student = students.filter((s) => {
   if(s.score >= 110) {
      return true
   }
})

console.log('highScore_student', highScore_student)
*/