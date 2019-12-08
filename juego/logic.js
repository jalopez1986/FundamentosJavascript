const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

const ULTIMO_NIVEL = 10;

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel,500)
    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)

        this.toogleBtnEmpezar()

        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    toogleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n=>Math.floor(Math.random() * 4));
    }

    siguienteNivel() {
        this.subNivel = 0
        this.iluminarSecuencia();
        //this.agregarEventosClick()
        this.agregarEventosClickWithMap()
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => {
                this.iluminarColor(color);
            }, 1000 * i);
            
        }

    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }

    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350) 
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    agregarEventosClickWithMap() {
        Object.keys(this.colores).map((color) => {
            this.colores[color].addEventListener('click', this.elegirColor)

        })
    }

    eliminarEventosClickWithMap() {
        Object.keys(this.colores).map((color) => {
            this.colores[color].removeEventListener('click', this.elegirColor)

        })
    }

    elegirColor(ev) {
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)

        if (numeroColor === this.secuencia[this.subNivel]) {
            this.subNivel++;
            if (this.subNivel === this.nivel) {
                this.nivel++;
                this.eliminarEventosClickWithMap()

                if (this.nivel === (ULTIMO_NIVEL + 1)) {
                    this.ganoElJuego()
                } else {
                    setTimeout(() => {
                        this.siguienteNivel()
                    }, 2000);
                    
                }
            }
        } else {
            this.perdioElJuego()
        } 
    }

    ganoElJuego() {
        swal('Platzi', 'Felicitaciones, ganaste el juego!', 'success')
        .then(() => {
            this.inicializar()
        })
    }

    perdioElJuego() {
        swal('Platzi', 'Lo lamentamos, perdiste :(', 'error').then( () => {
            this.eliminarEventosClickWithMap()
            this.inicializar()
        })
    }



    transformarColorANumero(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }

    }


}

function empezarJuego() {
    var juego = new Juego()
    window.juego = juego;
}