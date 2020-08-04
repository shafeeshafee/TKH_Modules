// CODEPEN - https://codepen.io/shafeetkh/pen/RwabYoy?editors=0012

const grade = parseInt(prompt("Enter the number grade you received: "));

switch (true) {
  case grade > 95:
    letterGrade = "A+";
    console.log(letterGrade);
    break;
  case grade > 88:
    letterGrade = "A";
    console.log(letterGrade);
    break;
  case grade > 84:
    letterGrade = "B+";
    console.log(letterGrade);
    break;
  case grade > 76:
    letterGrade = "C+";
    console.log(letterGrade);
    break;
  case grade > 70:
    letterGrade = "C";
    console.log(letterGrade);
    break;
  case grade > 67:
    letterGrade = "D+";
    console.log(letterGrade);
    break;
  case grade > 64:
   letterGrade = "D";
    console.log(letterGrade);
    break;
  case grade < 64:
    letterGrade = "F";
    console.log(letterGrade);
    break;
  default:
    console.log("Enter a number grade.");
}
