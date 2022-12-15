function soma() {
let contador = 0;
let numero = 0;

let soma = 0;
let contadora = 0;

do {
    let numero = parseInt(prompt("Digite um número: "));
    let fatorial = 1;
    for (contador = 1; contador <= numero; contador++) {
        let fatorial = fatorial * contador;
    };
    let soma = soma + fatorial;
    document.write(fatorial);
    let contadora = contadora + 1;
} while (contadora  <= 15);
document.write("A somatoria do fatorial dos valores digitados é: " + soma);
}