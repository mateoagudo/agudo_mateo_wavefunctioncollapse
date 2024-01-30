const celdas = [];
const RETICULA = 16;
let ancho; //ancho de la celda
let alto; //alto de la celda

const azulejos = [];
const NA = 50; // numero de azulejos

const reglas = [
  // reglas de los bordes de cada azulejo
  {
    //tile0
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile1
    UP: 1,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile2
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile3
    UP: 5,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile4
    UP: 5,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile5
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile6
    UP: 1,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile7
    UP: 1,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile8
    UP: 6,
    RIGHT: 1,
    DOWN: 5,
    LEFT: 0,
  },
  {
    //tile9
    UP: 4,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile10
    UP: 2,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile11
    UP: 5,
    RIGHT: 1,
    DOWN: 5,
    LEFT: 0,
  },
  {
    //tile12
    UP: 4,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 1,
  },
  {
    //tile13
    UP: 6,
    RIGHT: 1,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile14
    UP: 0,
    RIGHT: 7,
    DOWN: 5,
    LEFT: 0,
  },
  {
    //tile15
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 7,
  },
  {
    //tile16
    UP: 5,
    RIGHT: 1,
    DOWN: 5,
    LEFT: 0,
  },
  {
    //tile17
    UP: 2,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile18
    UP: 6,
    RIGHT: 1,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile19
    UP: 4,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 1,
  },
  {
    //tile20
    UP: 0,
    RIGHT: 7,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile21
    UP: 0,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 7,
  },
  // baldosas extra
  {
    //tile22
    UP: 5,
    RIGHT: 1,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile23
    UP: 2,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 1,
  },
  {
    //tile24
    UP: 4,
    RIGHT: 7,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile25
    UP: 6,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 7,
  },
  {
    //tile26
    UP: 0,
    RIGHT: 7,
    DOWN: 5,
    LEFT: 0,
  },
  {
    //tile27
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 7,
  },
  {
    //tile28
    UP: 0,
    RIGHT: 7,
    DOWN: 6,
    LEFT: 0,
  },
  {
    //tile29
    UP: 0,
    RIGHT: 0,
    DOWN: 4,
    LEFT: 7,
  },
  {
    //tile30
    UP: 0,
    RIGHT: 7,
    DOWN: 1,
    LEFT: 7,
  },
  {
    //tile31
    UP: 1,
    RIGHT: 8,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile32
    UP: 1,
    RIGHT: 1,
    DOWN: 5,
    LEFT: 8,
  },
  {
    //tile33
    UP: 1,
    RIGHT: 8,
    DOWN: 0,
    LEFT: 8,
  },
  {
    //tile34
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 8,
  },
  {
    //tile35
    UP: 5,
    RIGHT: 8,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile36
    UP: 5,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 7,
  },
  {
    //tile37
    UP: 2,
    RIGHT: 7,
    DOWN: 1,
    LEFT: 1,
  },
  {
    //tile38
    UP: 1,
    RIGHT: 8,
    DOWN: 4,
    LEFT: 1,
  },
  {
    //tile39
    UP: 1,
    RIGHT: 1,
    DOWN: 6,
    LEFT: 8,
  },
  {
    //tile40
    UP: 1,
    RIGHT: 3,
    DOWN: 2,
    LEFT: 1,
  },
  {
    //tile41
    UP: 1,
    RIGHT: 1,
    DOWN: 5,
    LEFT: 3,
  },
  {
    //tile42
    UP: 1,
    RIGHT: 3,
    DOWN: 4,
    LEFT: 1,
  },
  {
    //tile43
    UP: 1,
    RIGHT: 1,
    DOWN: 6,
    LEFT: 3,
  },
  {
    //tile44
    UP: 4,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 3,
  },
  {
    //tile45
    UP: 6,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile46
    UP: 6,
    RIGHT: 8,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile47
    UP: 4,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 8,
  },
  {
    //tile48
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile48
    UP: 0,
    RIGHT: 7,
    DOWN: 1,
    LEFT: 7,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`tiles/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  // opcionesI = opcionesIniciales
  let opcionesI = [];
  for (let i = 0; i < azulejos.length; i++) {
    opcionesI.push(i);
  }

  for (let i = 0; i < RETICULA * RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones: opcionesI,
    };
  }
  // celdas[8].colapsada = true;
  // celdas[3].colapsada = true;

  // celdas[12].opciones = [5, 6, 8];
  // celdas[4].opciones = [4, 7, 12];
  // celdas[6].opciones = [9, 7, 12];
  // celdas[1].opciones = [6, 4, 8, 10];
  // celdas[5].opciones = [11, 6, 4, 8, 10];
}

function draw() {
  // function filtrarCeldas(celda) {
  //   return celda.colapsada == false;
  // }
  // const celdasActuales = celdas.filter(filtrarCeldas);

  // const celdasActuales = celdas.filter(function (celda) {
  //   return celda.colapsada == false;
  // });

  const celdasDisponibles = celdas.filter((celda) => {
    return celda.colapsada == false;
  });
  if (celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a, b) => {
      return a.opciones.length - b.opciones.length;
    });
    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length;
    });

    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;
    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    // print(celdaSeleccionada);

    for (let x = 0; x < RETICULA; x++) {
      for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA; // posicion de la celda
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          // print(reglasActuales);
          image(azulejos[indiceDeAzulejo], x * ancho, y * alto, ancho, alto);

          // Cambiar entropia UP
          if (y > 0) {
            const indiceUP = x + (y - 1) * RETICULA;
            const celdaUP = celdas[indiceUP];
            if (!celdaUP.colapsada) {
              cambiarEntropia(celdaUP, reglasActuales["UP"], "DOWN");
            }
          }

          // Cambiar entropia RIGHT
          if (x < RETICULA - 1) {
            const indiceRIGHT = x + 1 + y * RETICULA;
            const celdaRIGHT = celdas[indiceRIGHT];
            if (!celdaRIGHT.colapsada) {
              cambiarEntropia(celdaRIGHT, reglasActuales["RIGHT"], "LEFT");
            }
          }

          // Cambiar entropia DOWN
          if (y < RETICULA - 1) {
            const indiceDOWN = x + (y + 1) * RETICULA;
            const celdaDOWN = celdas[indiceDOWN];
            if (!celdaDOWN.colapsada) {
              cambiarEntropia(celdaDOWN, reglasActuales["DOWN"], "UP");
            }
          }

          // Cambiar entropia LEFT
          if (x > 0) {
            const indiceLEFT = x - 1 + y * RETICULA;
            const celdaLEFT = celdas[indiceLEFT];
            if (!celdaLEFT.colapsada) {
              cambiarEntropia(celdaLEFT, reglasActuales["LEFT"], "RIGHT");
            }
          }
        } else {
          strokeWeight(5);
          rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
    // noLoop();
  }
}

function cambiarEntropia(_celda, _regla, _opuesta) {
  const nuevasOpciones = [];
  for (let i = 0; i < _celda.opciones.length; i++) {
    if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
      const celdaCompatible = _celda.opciones[i];
      nuevasOpciones.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevasOpciones;
  print(nuevasOpciones);
}
