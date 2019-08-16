const nombre = 'Daniel Fernando Yepez Velez';
let combinados, edad = 26, vegetariano = false, numero1 = Math.random()*20, numero2 = Math.random()*20, opcion;

function edadMia()
{
    for(let i = 1; i <= edad; i++)
    {
        if(i == edad)
        {
            console.log('edad:',edad);
        }
    }
}

edadMia();

function operaciones()
{
   opcion = parseInt(window.prompt('Operación que desea ejecutar:'+
                '\n1.SUMA.' + 
                '\n2.RESTA.' +
                '\n3.PRODUCTO.' +
                '\n4.DIVISIÓN.' +
                '\n5.MÓDULO.'));

    switch(opcion)
    {
      case 1:
            resultado = 'suma: ' + (numero1 + numero2);
         break;

      case 2:
            resultado = 'resta: ' + (numero1 - numero2);  
         break;

      case 3:
            resultado = 'producto: ' + (numero1 * numero2);   
         break;

      case 4:
            resultado = 'división: ' + (numero1 / numero2);   
         break;

      case 5:
            resultado = 'módulo: ' + (numero1 % numero2);  
         break;
    }

    return resultado;
}

console.log(operaciones());
(edad >= 18)?console.log(`${nombre} Eres mayor de edad`):console.log(`${nombre} No eres mayor de edad`);