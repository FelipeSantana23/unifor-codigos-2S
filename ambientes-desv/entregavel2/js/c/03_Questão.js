function fibonacci(){
var n = prompt("Número de termos:"), a = 0, b = 1, i = 2, c;

if (n == 1) {
    document.write(a);
} else {
    document.write(a + ", " + b);
}

while (i < n) {
	i = i + 1;
    c = a + b;
    document.write(", " + c);
    a = b;
    b = c;
}
}