// CODEPEN - https://codepen.io/shafeetkh/pen/RwabYoy?editors=0012

const grade = parseInt(prompt("Enter the number grade you received: "));

switch (true) {
  case grade > 95:
    console.log("A+");
    break;
  case grade > 88:
    console.log("A");
    break;
  case grade > 84:
    console.log("B+");
    break;
  case grade > 76:
    console.log("C+");
    break;
  case grade > 70:
    console.log("C");
    break;
  case grade > 67:
    letterGrade = "D+";
    console.log("D+");
    break;
  case grade > 64:
    console.log("D");
    break;
  case grade < 64:
    console.log("F");
    break;
  default:
    console.log("Invalid grade.");
}
