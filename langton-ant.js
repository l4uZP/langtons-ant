let baseMatrix = [];
const width = 5;
const height = 5;

let matrixWithAnt = [];

let ant = {
  degrees: 0,
  color: "red",
};
let antRowPosition = Math.floor(Math.random() * width + 1);
let antColumnPosition = Math.floor(Math.random() * height + 1);

initBaseMatrix();
initMatrixWithAnt();

console.log(
    "La hormiga esta en la posición: (" +
      antRowPosition +
      "," +
      antColumnPosition +
      "). que es un " +
      baseMatrix[antRowPosition][antColumnPosition]
  );

console.log(ant);

for (let loop = 0; loop <= 0; loop++) {
  if (baseMatrix[antRowPosition][antColumnPosition] === "black") {
    let direction = ant.degrees - 90;
    ant = {
      degrees: direction,
      color: "red",
    };
    updateMatrix("white");
  }
  if (baseMatrix[antRowPosition][antColumnPosition] === "white") {
    let direction = ant.degrees + 90;
    ant = {
      degrees: direction,
      color: "red",
    };
    updateMatrix("black");
  }
  console.log(ant);
  console.log("Matriz con hormiga después");
  console.log(matrixWithAnt);
}



//functions
function initBaseMatrix() {
  console.log("Matriz Base");
  for (let row = 0; row <= height; row++) {
    baseMatrix[row] = [];
    for (let column = 0; column <= width; column++) {
      let randomNumber = Math.floor(Math.random() * 2);
      if (randomNumber === 0) {
        baseMatrix[row][column] = "black";
      } else {
        baseMatrix[row][column] = "white";
      }
    }
  }
  console.log(baseMatrix);
}

function initMatrixWithAnt() {
  matrixWithAnt = baseMatrix.map(function (subArray) {
    return subArray.slice();
  });
  matrixWithAnt[antRowPosition][antColumnPosition] = ant;
}

function updateMatrix(color) {
  matrixWithAnt[antRowPosition][antColumnPosition] = color;
  switch (ant.degrees) {
    case 0:
      matrixWithAnt[antRowPosition - 1][antColumnPosition] = ant;
      break;
    case 90:
      matrixWithAnt[antRowPosition][antColumnPosition + 1] = ant;
      break;
    case -90:
      matrixWithAnt[antRowPosition][antColumnPosition - 1] = ant;
      break;
  }
}
