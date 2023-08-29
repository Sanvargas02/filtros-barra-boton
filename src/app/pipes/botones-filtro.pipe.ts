import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'botonesFiltro'
})
export class BotonesFiltroPipe implements PipeTransform {

  transform(filteredItems: any[], value: string): any[] {

    if (value === 'todos') {
      return filteredItems; //Retorna el arreglo tal cual
    } else {
      // En caso de que seleccione otros valores se debe crear un arreglo nuevo con sólo los elementos que llevan ese o esos valores e imprimirlos en el html.
      filteredItems = filteredItems.filter((item) => {
        // Empezamos a evaluar en este caso los servicios que es mi arreglo de elementos que deseo filtrar
        for (const servicio of item.services) {
          if (servicio.toLowerCase() === value) {
            return true; //Retornamos el caso de éxito para filter(), se incluye el elemento actual
          }
        }
        return false; //Aseguramos que luego del for se retorne algo en caso de que ningún elemento coincida
        //Aseguramos un retorno
      });
    }

    return filteredItems; //Luego del else retorna el arreglo filtrado
  }

}
