let usoDiasDaSemana = [1,2,3.4,5,1.2,0.5,12];

const indicadorDeUso =(numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return '🟢';
    } else if ( numeroDeHoras <= 3 ) {
        return '🟡';
    } else {
        return '🔴'
    }
}

console.log ( indicadorDeUso (usoDiasDaSemana [0]) );
console.log ( indicadorDeUso (usoDiasDaSemana [1]) );
console.log ( indicadorDeUso (usoDiasDaSemana [2]) );
console.log ( indicadorDeUso (usoDiasDaSemana [3]) );
console.log ( indicadorDeUso (usoDiasDaSemana [4]) );
console.log ( indicadorDeUso (usoDiasDaSemana [5]) );
console.log ( indicadorDeUso (usoDiasDaSemana [6]) );
