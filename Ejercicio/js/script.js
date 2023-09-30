var operacion = prompt("Seleccionar operación al realizar:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Divicion");

operacion = parseInt(operacion);

if (isNaN(operacion) || operacion < 1 || operacion > 4) {
    document.write("Operación inválida");
} else {
 
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    var resultado;

    switch (operacion) {
        case 1:
            resultado = numero1 + numero2;
            document.write("La suma es: " + resultado);
            break;
        case 2:
            resultado = numero1 - numero2;
            document.write("La resta es: " + resultado);
            break;
        case 3:
            resultado = numero1 * numero2;
            document.write("La multiplicación es: " + resultado);
            break;
        case 4:
            if (numero2 === 0) {
                document.write("No se puede dividir por cero.");
            } else {
                resultado = numero1 / numero2;
                document.write("La división es: " + resultado);
            }
            break;
        default:
            document.write("Operación inválida");
            break;
    }
}

