// Array principal
let discos = [];

/*
   discos = [
    {
        "nombre": string,
        "artista": string,
        "codigo": number,
        "pistas": [
            {
                "nombre": string,
                "duracion": number
            }
        ]
    }
   ]
*/


// Validacion string
function validarString(msg) {
  // Variable para guardar string  
  let str;
    do {
      // Pido string
      str = prompt(msg).trim();
      // Si no es válido muestro alert
      if (!isNaN(str)){
        alert("Intente nuevamente ingresando un texto válido")
      }
    } while(!isNaN(str));
    // Retorno str validado
    return str;
  }

// Validacion number
function validarNumber(msg) {
  // Variable para guardar number
  let num;
  do {
    // Pido num 
    num = parseInt(prompt(msg));
    // Si no es valido y no está dentro del rango pedido muestro alert
    if (isNaN(num)){
        alert("Intente nuevamente ingresando valores numéricos (0-7200)")
    }
    if ( num < 0 || num > 7200){
        alert("Intente nuevamente ingresando valores entre 0 - 7200")
    }
  } while(isNaN(num) || num < 0 || num > 7200);
  // Retorno number validado
  return num;
}

// Array para almacenar los códigos ingresados
let codigosIngresados = []; 

// Validacion codigos ingresados
function validarCodigo(){
    let codigo;
    do{
      // Pido dato
        codigo = parseInt(prompt("Ingrese el cógido del disco (1-999)"))
        // Validar que el codigo esté entre 1 y 999
        if (codigo >= 1 && codigo <= 999) {
            // Verificar si el codigo ya fue ingresado
            if(codigosIngresados.includes(codigo)){
                alert("El código ingresado ya fue registrado previamente")
            } else {
            // Si no esta incluido se pushea al array
            codigosIngresados.push(codigo); 
            // Devuelvo codigo validado
            return codigo;
            }
        }else{
            alert("Intente nuevamente ingresando valores entre 1 - 999");
        } 
    // El bucle se repite cuando la condicion es true y se rompe con el return
    } while (true);
  }

// Contador
let cantidadDiscos = 0;


function cargarDisco() {
    do {
      // Pido nombre del disco
      let nombreDisco = validarString("Ingrese el nombre del disco");
      // Pido artista del disco
      let artistaDisco = validarString("Ingrese el artista del disco");
      // Pido codigo numérico del disco
      let codigoDisco = validarCodigo();
  
      // Creo instancia de objeto disco
      let disco = new Disco(nombreDisco, artistaDisco, codigoDisco);
  
      // Datos de pista
      do {

        // Pido nombre de pista
        let nombrePista = validarString("Ingrese el nombre de la pista");
        // Pido duración de pista
        let duracionPista = validarNumber("Ingrese la duración de la pista");
  
        // Creo instancia de objeto pista
        let pista = new Pista(nombrePista, duracionPista);
        // Agrego objeto pista a array de pistas
        disco.pistas.push(pista);

      } while (confirm("¿Desea cargar otra pista?"));
  
      // Agrego objeto disco a array discos
      discos.push(disco);
      // Contador de discos
      cantidadDiscos++;
    } while (confirm("¿Desea cargar otro disco?"));
  }

 
  function mostrarDiscos() {
    
    const contenedorDiscos = document.getElementById("contenedorDiscos");
    contenedorDiscos.innerHTML = "";

    const pCantidadDiscos = document.createElement("p");
        pCantidadDiscos.innerText = `Cargaste ${cantidadDiscos} disco(s).`;
        pCantidadDiscos.setAttribute("class", "cantidadDiscos");

    // Recorro los discos
    for (let disco of discos) {
      // Creo un section para cada disco
      const section = document.createElement("section");
      //
      section.append(disco.mostrar());
      
      // Agrego el section al contenedor de discos
      contenedorDiscos.append(section, pCantidadDiscos);
    }
  
    //Agrego contenedorDiscos al body
    document.querySelector("body").append(contenedorDiscos);
  }

  function limpiarDiscos() {
    //Llamo al contenedor por ID
    const contenedorDiscos = document.getElementById("contenedorDiscos");
    // Reemplazo con string vacio
    contenedorDiscos.innerHTML = "";
  }

  // Buscar disco por codigo
  function buscarDisco() {
    let codigo;
    // Validar codigo ingresado
    do {
      codigo = parseInt(prompt("Ingrese un código de disco (1-999)"));
    } while (isNaN(codigo) || codigo < 1 || codigo > 999);
    
    // Parto de que no hay un disco encontrado.
    let discoEncontrado = false;
    
    // Recorro array de discos
    for (let disco of discos) {
      // Verificar si el codigo esta en el array
      if (disco.codigo === codigo) {
        const contenedorDiscos = document.getElementById("contenedorDiscos");
        contenedorDiscos.innerHTML = "";
        contenedorDiscos.append(disco.mostrar());
        //Se encontró un disco
        discoEncontrado = true;
        break;
      }
    }
    // No se encontró el disco, mostrar mensaje de error.
    if (discoEncontrado = false) {
      alert("El código ingresado es incorrecto. Intente nuevamente");
    }
  }
  

