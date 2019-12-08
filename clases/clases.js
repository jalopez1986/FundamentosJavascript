// var persona = {
//     nombre: 'Jorge',
//     apellido: 'Lopez',
//     edad: 32
// }

// const MAYORIA_DE_EDAD = 18;

// // var esMayorDeEdad = function (persona) {
// //     return persona.edad >= MAYORIA_DE_EDAD;
// // }

// // var esMayorDeEdad = (persona) => {
// //     return persona.edad >= MAYORIA_DE_EDAD;
// // }
// //Si solo tiene una parametro se pueden quitar los parentesis
// //Si solo tiene una linea se pueden quitar las llaves
// //const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
// //usando destructing
// const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


// function imprimirSiEsMayorDeEdad(persona) {
//     if (esMayorDeEdad(persona)) {
//         console.log(`${persona.nombre} es mayor de edad`);
//     } else {
//         console.log(`${persona.nombre} es menor de edad`);
//     }
// }

// for (var i = 1; i < condicion; i++) {
//     //ejecuta el codigo
// }

/*
var jorge = {
    nombre: 'jorge',
    edad: 12,
    altura: 1.63
}

var caro = {
    nombre: 'caro',
    edad: 12,
    altura: 1.59

}

var santi = {
    nombre: 'santi',
    edad: 12,
    altura: 1.30
}

var personas = [jorge, caro, santi]

const esMayor = persona => persona.edad >= 18;
var personasMayores = personas.filter(esMayor);


const pasarAlturaCms = persona => ({
        ...persona,
        altura: persona.altura * 100
    })

var personasCms = personas.map(pasarAlturaCms);*/

//Como funcionan las clases en javascript
/*
function Persona(nomnbre, apellido, altura) {
    this.nomnbre = nomnbre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nomnbre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

var jorge = new Persona('Jorge', 'López',1.64);
var carolina = new Persona('Caro', 'Gonzales',1.59);
var Santi = new Persona('Jorge', 'López',1.84);

jorge.soyAlto();
carolina.soyAlto();
Santi.soyAlto();
*/
//con arrow function
/*
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {
        fn.prototype = prototipoPadre.prototype;
        prototipoHijo.prototype = new fn;
        prototipoHijo.prototype.constructor = prototipoHijo;
    }
}

function Persona(nomnbre, apellido, altura) {
    this.nomnbre = nomnbre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nomnbre} ${this.apellido}`);
}

Persona.prototype.soyAlto = () => this.altura > 1.8;

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`);
}

var jorge = new Persona('Jorge', 'López',1.64);
var carolina = new Persona('Caro', 'Gonzales',1.59);
var Santi = new Desarrollador('Santi', 'López', 180);

jorge.saludar();
carolina.saludar();
Santi.saludar();
*/

/*
function heredaDe(PrototipoHijo, PrototipoPadre) {
    var fn = function () {}
    fn.prototype = PrototipoPadre.prototype
    PrototipoHijo.prototype = new fn
    PrototipoHijo.prototype.constructor = PrototipoHijo
}

function Persona(nombre,apellido,altura) {
 this.nombre = nombre
 this.apellido = apellido
 this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre}${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    return this.altura >= 1.80
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido

}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador`)
}

var jorge = new Persona('Jorge', 'López',1.64);
var carolina = new Persona('Caro', 'Gonzales',1.59);
var Santi = new Desarrollador('Santi', 'López', 1.83);
*/

/*
class Persona {
    constructor(nombre,apellido,altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        var {nombre, apellido} = this;
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto() {
        return this.altura >= 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        var {nombre, apellido} = this;
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`No sabia que eras desarrollador`);
    }
}

var jorge = new Persona('Jorge', 'López',1.64);
var carolina = new Persona('Caro', 'Gonzales',1.59);
var Santi = new Desarrollador('Santi', 'Bernal', 1.83);

jorge.saludar();
carolina.saludar(responderSaludo);
Santi.saludar(responderSaludo);
*/
/*
console.log('a')
setTimeout(() => console.log('b'), 0);
console.log('c')
*/
/*
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $
    .get(url, opts, function (persona) {
        console.log(`Hola, soy ${persona.name}`);
        
        if (callback) {
            callback();
        }
    }).fail(() => {
        console.log(`Ocurrio un error. No se pudo obtener el personaje ${id} `)
    })
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4);
        })
    })
})*/

//promoesas

const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(url, opts, function (data) {
            resolve(data);
        })
        .fail(() => reject(id))
    })
}

function onError(id) {
    console.log('Sucedió un error al obtener el personaje' + id);
}

/*
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`);
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`);
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`);
        return obtenerPersonaje(4)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`);
    })
    .catch(function (id) {
        onError(id);
    })
*/

//promesas en parallelo
var ids = [1, 2, 3, 4, 5, 6, 7];

/*
var promesas = ids.map(function (id) {
    return obtenerPersonaje(id);
}) */

var promesas = ids.map( id => obtenerPersonaje(id));
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

