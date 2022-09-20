var a =prompt("Digite o numero"), b = prompt("Digite o numero");
function mcd(a, b) {
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    return a;
}

console.log("o calculo de mdc de " + a + " e " + b+ " é: " + mcd(a, b));