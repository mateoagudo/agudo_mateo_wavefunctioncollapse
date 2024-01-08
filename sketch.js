const celdas = [];
const RETICULA = 4;

const azulejos = [];
const NA = 12; // numero de azulejos

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
    UP: 7,
    RIGHT: 3,
    DOWN: 0,
    LEFT: 0,
  },
  {
    //tile4
    UP: 7,
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
    LEFT: 0,
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
    UP: 8,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 7,
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
    UP: 7,
    RIGHT: 1,
    DOWN: 7,
    LEFT: 0,
  },
];

function preload() {
  for (let i = 0; i < NA; i++) {
    azulejos[i] = loadImage(`tiles/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
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
  print(celdas);
}

function draw() {}
