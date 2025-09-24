console.log(5 > 10); // maior que 

console.log(5 < 10); // menor que 

console.log(5 == 10); // igual

console.log(5 != 10); // diferente

console.log(5 >= 10); // maior ou igual

if (5 < 10) {
    console.log('5 é menor do que 10'); // se - verificação de condição
}

if ('Chuveiro' == 'chuveiro') { // false
    console.log('As strings são iguais');
}

let carro = 'Nissan';

if (carro == 'Nissan') { // true
    console.log('Carro é da marca Nissan');
} else {
    console.log('Carro não é um Nissan');
}


// operadores lógicos

// operador lógico e && // verificações de duas ou mais

if (10 > 5 && 20 > 17) {
    console.log('10 é maior que 5 && 20 é maior que 17');
}

let modelo = 'punto';
let marca = 'fiat';
let ano = '2025';

if (modelo == 'punto' && marca == 'fiat' && ano == '2024') {
    console.log('carro é um fiat punto 2024');
} else {
    console.log('carro não é um fiat punto 2024');
}

// operador ou ||

if (modelo == 'mobi' || modelo == 'uno') {
    console.log('o carro é um mobi ou um uno');
}

// operador && e operador || combinados 

if (ano == '2025' && modelo == 'mobi' || modelo == 'uno') {
    console.log('veiculo está no pacote promocional');
} else {
    console.log('veiculo não elegivel para promoção');
}

if ( ano == '2025' ) {

} else if ( ano == '2024' ) {

} else if ( ano == '2023' ) {

} else {
    
}