import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filto'
})
export class FiltoPipe implements PipeTransform {

  //El primer elemnto nos lo trae del html lo modifica y lo retorna mostrando sólo lo que se lista
  transform(posts: any[], filterPost: string): any[] {
    if (!filterPost) {
      return posts;
    }
    filterPost = filterPost.toLowerCase();
    return posts.filter(post => post.title.toLowerCase().includes(filterPost));
  }

}
