/* Jardin
El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada*/

//Empiezo con el main
console.clear();
const classroomAzul:number = 40;
const classroomVerde:number = 35;
const classroomAmarilla:number = 30;

let numstudents:number=Number(prompt("Ingrese la cantidad de alumnos");
if (numstudents>106 || numstudents<0 || isNaN(numstudents) || numstudents % 1)
{
  alert("Solo numeros enteros entre 0 a 106")
} else {
   if (numstudents<31)
    { 
    console.log("Utilice el Aula Azul para los " + numstudents +" Alumnos");
    } else{ 
       if ((numstudents<61))
        {
        console.log("Utilice el Aula Azul para los " + (numstudents/2).toPrecision(2) +" Alumnos");
        console.log("y Utilice el Aula Verde para los " + (numstudents - (numstudents/2).toPrecision(2)) +" Alumnos");
        } else {
           if ((numstudents<66))
            {
              console.log("Utilice el Aula Azul para los " + classroomAzul +" Alumnos");
              console.log("y Utilice el Aula Verde para los " + (numstudents - classroomAzul) +" Alumnos");
            }
          } 
         
      }
    
  }
