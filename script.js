const percentageNode = document.querySelector(".btn--percentage");
const CENode = document.querySelector(".btn--CE");
const CNode = document.querySelector(".btn--C");
const backspaceNode = document.querySelector(".btn--leftarrw");
const exponentialNode = document.querySelector(".btn--exponential");
const powerNode = document.querySelector(".btn--pow");
const sqrtNode = document.querySelector(".btn--sqrt");
const multiplyNode = document.querySelector(".btn--multiplication");
const plusNode = document.querySelector(".btn--plus");
const minusNode = document.querySelector(".btn--minus");
const divisionNode = document.querySelector(".btn--division");
const numberButtons = document.querySelectorAll(".btn--num");
const equivalentNode = document.querySelector(".btn--equals");
const openingBracket = document.querySelector(".btn--opening--bracket");
const closingBracket = document.querySelector(".btn--closing--bracket");

const singleCalcData = [];

numberButtons.forEach((numNode, i) => {
  numNode.addEventListener("click", () => {
    if (i == 9) {
      userInput.value += 0;
      singleCalcData.push(0);
    }
    if (i < 9) {
      userInput.value += i + 1;
      singleCalcData.push(i + 1);
    }
  });
});

////////////////////////////////////////////////////////////////////////
const exponentialSymbol = " ^(1/";
const plusSymbol = "+";
const minusSymbol = "-";
const multiplicationSymbol = "x";
const divisionSymbol = "/";
const powerSymbol = " raised to the power ";
const allSymbols = [
  exponentialSymbol,
  plusSymbol,
  minusSymbol,
  multiplicationSymbol,
  divisionSymbol,
  powerSymbol,
];

////////////////////////////////////////////////////////////////////

//getting input from user
const userInput = document.querySelector(".user-input");

userInput.addEventListener("keyup", (event) => {
  singleCalcData.push(event.key);
  //   console.log("Key event value", event.key);
  //   console.log(userInput.value);
});

////////////////////////////////////////////////////////////////////////
// percentage btn
percentageNode.addEventListener("click", () => {
  const userData = singleCalcData.join("");
  console.log("array data:", userData);

  const calcSingleNum = +userData;

  console.log("percentage num:", calcSingleNum);
  const result = calcSingleNum * 0.01;
  userInput.value = result;
});
////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//clear user input -- two buttons
const clearInputNodeBtns = [CENode, CNode];
clearInputNodeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    singleCalcData.length = 0;
    userInput.value = "";
  });
});
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// backspace -- removing last digit
backspaceNode.addEventListener("click", () => {
  console.log(userInput.value);
  const originalString = userInput.value;
  userInput.value = originalString.substr(0, originalString.length - 1);
  singleCalcData.pop();
});
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// nth root of a number
exponentialNode.addEventListener("click", () => {
  const userNum = singleCalcData.join("");

  singleCalcData.push(exponentialSymbol);
  userInput.value += exponentialSymbol;
  const firstNumber = +userNum;
  const secondNumber = singleCalcData.join("").split(exponentialSymbol)[1];
  errorChecker();
});
/////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
// squareroot of a number

sqrtNode.addEventListener("click", () => {
  const toCalcNum = +singleCalcData.join("");
  console.log(toCalcNum);
  userInput.value = Math.sqrt(toCalcNum);
});
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//addition in calculator
plusNode.addEventListener("click", () => {
  const lastEle = singleCalcData[singleCalcData.length - 1];
  if (
    lastEle == plusSymbol ||
    lastEle == minusSymbol ||
    lastEle == "*" ||
    lastEle == divisionSymbol ||
    lastEle == "^"
  ) {
    alert("Invalid key😥🙄.You cannot put together two operators at a time.");
  } else {
    userInput.value += plusSymbol;
    singleCalcData.push(plusSymbol);
  }
});
///////////////////////////////////////////////////////////////////////
//subtraction in calculator
minusNode.addEventListener("click", () => {
  const lastEle = singleCalcData[singleCalcData.length - 1];
  if (
    lastEle == plusSymbol ||
    lastEle == minusSymbol ||
    lastEle == "*" ||
    lastEle == divisionSymbol ||
    lastEle == "^"
  ) {
    alert("Invalid key😥🙄.You cannot put together two operators at a time.");
  } else {
    userInput.value += minusSymbol;
    singleCalcData.push(minusSymbol);
  }
});
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// multiplication
multiplyNode.addEventListener("click", () => {
  const lastEle = singleCalcData[singleCalcData.length - 1];
  if (
    lastEle == plusSymbol ||
    lastEle == "*" ||
    lastEle == minusSymbol ||
    lastEle == divisionSymbol ||
    lastEle == "^"
  ) {
    alert("Invalid key😥🙄.You cannot put together two operators at a time.");
  } else {
    userInput.value += multiplicationSymbol;
    singleCalcData.push("*");
  }
});
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// division in calculator
divisionNode.addEventListener("click", () => {
  const lastEle = singleCalcData[singleCalcData.length - 1];
  if (
    lastEle == plusSymbol ||
    lastEle == divisionSymbol ||
    lastEle == minusSymbol ||
    lastEle == "*" ||
    lastEle == "^"
  ) {
    alert("Invalid key😥🙄.You cannot put together two operators at a time.");
  } else {
    userInput.value += divisionSymbol;
    singleCalcData.push(divisionSymbol);
  }
});
///////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
// number raised to the power
powerNode.addEventListener("click", () => {
  if (singleCalcData.length == 0) {
    alert("You cannot press this key first.Pls enter some value first");
  } else {
    const lastEle = singleCalcData[singleCalcData.length - 1];
    if (
      lastEle == plusSymbol ||
      lastEle == "^" ||
      lastEle == minusSymbol ||
      lastEle == "*" ||
      lastEle == divisionSymbol
    ) {
      alert("Invalid key😥🙄.You cannot put together two operators at a time.");
    } else {
      userInput.value += powerSymbol;
      singleCalcData.push("^");
    }
  }
});
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//calculator error checking
function errorChecker() {
  let count = 0;

  singleCalcData.forEach((ele, i) => {
    if (ele == exponentialSymbol || ele == powerSymbol) {
      ++count;
    }
  });
  if (count > 1) {
    userInput.value = "ERROR❌❎❌";
    setTimeout(() => {
      userInput.value = "";
      err = false;
    }, 700);
  }
}
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// equals-to "="btn
equivalentNode.addEventListener("click", () => {
  console.log(singleCalcData);
  const mathematicalExpression = singleCalcData.join("");
  console.log(mathematicalExpression);
  try {
    const result = math.evaluate(mathematicalExpression);
    userInput.value = result;
    singleCalcData.length = 0;
    singleCalcData.push(result);
  } catch (err) {
    console.log(err);
    alert("Pls enter correctly your mathematical expression");
    userInput.value = "";
  }
});
//////////////////////////////////////////////////////////

let openingCount = 0;
let closingCount = 0;
/////////////////////////////////////////////////////////////
//  opening and closing brackets
openingBracket.addEventListener("click", () => {
  ++openingCount;
  userInput.value += "(";
  singleCalcData.push("(");
});

closingBracket.addEventListener("click", () => {
  ++closingCount;
  userInput.value += ")";
  singleCalcData.push(")");
});
//////////////////////////////////////////////////////////////
