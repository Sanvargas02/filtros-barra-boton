import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-filtro',
  templateUrl: './barra-filtro.component.html',
  styleUrls: ['./barra-filtro.component.css']
})
export class BarraFiltroComponent {

  //Propiedad para el Pipe en el filtro de texto
  filterPost: string = '';

  //Nuestros datos traidos de un Back petición http o Firebase
  posts = [
    {
      id: 1,
      title: 'La Carreta',
      date: '02/04/2023',
      services: ['hotel', 'Hoyo feo']
    },
    {
      id: 2,
      title: 'Paragón Plaza',
      date: '02/04/2022',
      services: ['Restaurante']
    },
    {
      id: 3,
      title: 'Carne a la Llanera',
      date: '02/04/2021',
      services: ['motel', 'Hoyo feo']
    },
    {
      id: 4,
      title: 'Otro restaurant',
      date: '02/04/2020',
      services: ['Hoyo feo', 'Cancha']
    },
    {
      id: 5,
      title: 'Ultima búsqueda',
      date: '02/04/2019',
      services: ['Cancha']
    }
  ]

  //Pasamos todo nuestros datos a un arreglo nuevo para trabajarlo e imprimirlo en html
  //Esto para no alterar el arreglo original
  filteredItems: any[] = this.posts;

  //Función para filtrar por medio del botón
  applyFilter(selectedCategory: any) {
    let value = selectedCategory.target.value; // Obtenemos el valor seleccionado en el html.
    value = value.toLowerCase(); // Los valores de las opciones pasan a minúsculas para comparar.
    // Iniciamos indicando que si el valor seleccionado en el botón coincide con el texto el arreglo se mantiene igual a todos los datos traidos desde el back.
    if (value === 'todos') {
      this.filteredItems = this.posts;
    } else {
      // En caso de que seleccione otros valores se debe crear un arreglo nuevo con sólo los elementos que llevan ese o esos valores e imprimirlos en el html.
      this.filteredItems = this.posts.filter(item => {
        // Empezamos a evaluar en este caso los servicios que es mi arreglo de elementos que deseo filtrar
        for (const servicio of item.services) {
          if (servicio.toLowerCase() === value) {
            return true; //Retornamos el caso de éxito para filter(), se incluye el elemento actual
          }
        }
        return false; //Aseguramos que luego del for se retorne algo en caso de que ningún elemento coincida
        //Aseguramos un retorno
      }
      );
    }
  }


}
