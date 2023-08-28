import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filto'
})
export class FiltoPipe implements PipeTransform {
  //Pipe para filtrar por texto
  //El primer elemnto nos lo trae del html lo modifica y lo retorna mostrando sólo lo que se lista
  transform(filteredItems: any[], filterPost: string): any[] {
    if (!filterPost) {
      return filteredItems;
    }
    filterPost = filterPost.toLowerCase();
    return filteredItems.filter(filteredItem => filteredItem.title.toLowerCase().includes(filterPost));
  }

}
