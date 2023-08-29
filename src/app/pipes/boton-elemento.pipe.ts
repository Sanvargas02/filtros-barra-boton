import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'botonElemento'
})
export class BotonElementoPipe implements PipeTransform {

  transform(filteredItems: any[], value2: string): any[] {

    if (value2 === 'todos') {
      return filteredItems;
    } else {
      // En caso de que seleccione otros valores se debe crear un arreglo nuevo con sólo los elementos que llevan ese o esos valores e imprimirlos en el html.
      //USAMOS FILTEREDITEMS PARA CONSERVAR LOS CAMBIOS DEL PRIMER FILTRADO
      filteredItems = filteredItems.filter((item) => {
        return item.ciudad.toLowerCase() === value2;
      });
    }

    return filteredItems;
  }

}
