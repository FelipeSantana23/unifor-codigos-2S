function numPrimo() {
    let n;
    let divisor = 2;
    n=prompt("digite o valor");
    while(n%divisor != 0)
        divisor++;
    
    if(n == divisor){
        document.write("Número "+n+ " é Primo!");
    }
    else{
        document.write("Número "+n+ " NÃO é primo!");
    }
    
}
