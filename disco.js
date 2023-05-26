class Disco {
    constructor(nombre, artista, codigo) {
        this.nombre = nombre;
        this.artista = artista;
        this.codigo = codigo;
        this.pistas = [];
    }

    // Cantidad de pistas que tiene array pistas
    cantidadPistas(){
      return this.pistas.length;
    }

    // Duración total del disco
    duracionTotal(){
      let duracionTotal = 0;
      // Recorro array pistas 
      for(let pista of this.pistas)
      // Sumo la duración de cada pista y la asigno a duracionTotal
      duracionTotal += pista.duracion;

      // Retorno duracion total del disco
      return duracionTotal;
    }

    // Encontrar duración más alta 
    duracionMasAlta(){
      let duracionMasAlta = 0;
      let discoMayor = null;

      //Recorro array discos
      for(let disco of discos){
        if (disco.duracionTotal() > duracionMasAlta) {
          duracionMasAlta = disco.duracionTotal();
        }
      }
      //Retorno pista con mayor duración
      return duracionMasAlta;
    }

    // Promedio de duración más alto
    promedioDuracion(){
      // Verifico si se cargo duracion de pistas
      if (this.duracion === 0){
        return 0;
      }
      // Constante con duracion total del disco
      const duracionTotal = this.duracionTotal();
      // Retorno promedio (duracion total / cantidad de pistas)
      return duracionTotal / this.pistas.length;
    }

    // Pista mayor
    pistaMayor(){
      let duracionMayor = 0;
      let pistaMayor = null;
      // Recorro array pistas
      for(let pista of this.pistas){
        // Verifico que duracion de la pista sea mayor que 0
        if (pista.duracion > duracionMayor){
          // Si es mayor reasigno la duracion a la variable
          duracionMayor = pista.duracion;
          // Reasigno variable pistaMayor a pista con mayor duración
          pistaMayor = pista;
        }
      }
      //Retorno pista con mayor duración
      return pistaMayor.nombre;
    }


    // Mostrar en DOM
    mostrar() {
  
        const contenedor = document.createElement("div");
        
        const h2 = document.createElement("h2");
        h2.innerText = `${this.nombre}`;

        const pDuracionTotal = document.createElement("p");
        pDuracionTotal.innerText = `Duracion total: `
        pDuracionTotal.setAttribute("class", "italic");

        const span = document.createElement("span");
        span.innerText = `${this.duracionTotal()} s.`;

        // Comparo duracion más alta con duración total del disco
        if(this.duracionMasAlta() === this.duracionTotal()) {
        // Clase destacar
        span.setAttribute("class", "destacar");
        }
        // Appendeo el span a pDuracionTotal
        pDuracionTotal.append(span);

        const pPromedioDuracion = document.createElement("p");
        pPromedioDuracion.innerText = `Promedio de duración del disco: ${this.promedioDuracion()} s.`
        pPromedioDuracion.classList.add("italic", "margin-b");
       
        const pAutor = document.createElement("p");
        pAutor.innerText = `ARTISTA: ${this.artista}`;
        pAutor.setAttribute("class", "pistaDatos");
    
        const pCodigo = document.createElement("p");
        pCodigo.innerText = `CÓDIGO: ${this.codigo}`;
        pCodigo.setAttribute("class", "pistaDatos");
    
        const h3 = document.createElement("h3");
        h3.innerText = "PISTAS:";
        h3.setAttribute("class", "pistaDatos");

        const pCantidadPistas = document.createElement("p");
        pCantidadPistas.innerText = `Cargaste ${this.cantidadPistas()} pista(s).`
        pCantidadPistas.classList.add("italic", "margin-t");

        const pPistaMayor= document.createElement("p");
        pPistaMayor.innerText = `Pista con mayor duración: ${this.pistaMayor()}.`
        pPistaMayor.setAttribute("class", "italic");
    
        contenedor.append(h2, pDuracionTotal, pPromedioDuracion, pAutor, pCodigo, h3);
        
        // Recorro las pistas
        for(let pista of this.pistas) {
          // Appendeo cada pista que tenga pistas (.mostrar() devuelve un ul)
          contenedor.append(pista.mostrar());
        }

        contenedor.append(pCantidadPistas, pPistaMayor);

        // Devuelvo un section
        return contenedor;
      }
  } 

