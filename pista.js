class Pista { 
    constructor(nombre, duracion){
        this.nombre = nombre;
        this.duracion = duracion;
    }

    mostrar() {
      // Creo ul
      const ul = document.createElement("ul");
        
      const liNombre = document.createElement("li");
      liNombre.innerText = `${this.nombre}`;
      
      const liDuracion = document.createElement("li");
      liDuracion.innerText = `Duración: `;
  
      const span = document.createElement("span");
      span.innerText = `${this.duracion} s.`;
      // Destacar pistas con duración mayar a 180s
      if(this.duracion > 180) {
        // Clase destacar
        span.setAttribute("class", "destacar");
      }
      // Appendeo el span a liDuracion
      liDuracion.append(span);
  
      ul.append(liNombre, liDuracion);
      return ul;
    }
}

