import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-filtro',
  templateUrl: './barra-filtro.component.html',
  styleUrls: ['./barra-filtro.component.css'],
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
      services: ['hotel', 'Hoyo feo'],
      ciudad: 'neiva',
    },
    {
      id: 2,
      title: 'Paragón Plaza',
      date: '02/04/2022',
      services: ['Restaurante'],
      ciudad: 'garzon',
    },
    {
      id: 3,
      title: 'Carne a la Llanera',
      date: '02/04/2021',
      services: ['motel', 'Hoyo feo'],
      ciudad: 'gigante',
    },
    {
      id: 4,
      title: 'Otro restaurant',
      date: '02/04/2020',
      services: ['Hoyo feo', 'Cancha'],
      ciudad: 'tarqui',
    },
    {
      id: 5,
      title: 'Ultima búsqueda',
      date: '02/04/2019',
      services: ['Cancha'],
      ciudad: 'hobo',
    },
    {
      id: 6,
      title: 'Ultima búsqueda',
      date: '02/04/2019',
      services: ['Cancha'],
      ciudad: 'hobo',
    },
  ];

  //Pasamos todo nuestros datos a un arreglo nuevo para trabajarlo e imprimirlo en html
  //Esto para no alterar el arreglo original
  filteredItems: any[] = this.posts;

  //Propiedad para el Pipe en el filtro por botón
  value: string = 'todos'; //Almacena el valor de la opción que se elija en el botón a filtrar.

  //Propiedad para el Pipe en el filtro por botón
  value2: string = 'todos'; //Almacena el valor de la opción que se elija en el botón a filtrar.

  //Función para filtrar por medio del botón
  applyFilterServices(selectedCategory: any) {
    this.value = selectedCategory.target.value; // Obtenemos el valor seleccionado en el html.
    this.value = this.value.toLowerCase(); // Los valores de las opciones pasan a minúsculas para comparar.
    // Iniciamos indicando que si el valor seleccionado en el botón coincide con el texto el arreglo se mantiene igual a todos los datos traidos desde el back.
    // if (this.value === 'todos') {
    //   this.filteredItems = this.posts;
    // } else {
    //   // En caso de que seleccione otros valores se debe crear un arreglo nuevo con sólo los elementos que llevan ese o esos valores e imprimirlos en el html.
    //   this.filteredItems = this.posts.filter((item) => {
    //     // Empezamos a evaluar en este caso los servicios que es mi arreglo de elementos que deseo filtrar
    //     for (const servicio of item.services) {
    //       if (servicio.toLowerCase() === this.value) {
    //         return true; //Retornamos el caso de éxito para filter(), se incluye el elemento actual
    //       }
    //     }
    //     return false; //Aseguramos que luego del for se retorne algo en caso de que ningún elemento coincida
    //     //Aseguramos un retorno
    //   });
    // }
  } //Fin Función applyFilterServices

  //Función para filtrar por medio del botón
  applyFilterElement(selectedCategory: any) {
    this.value2 = selectedCategory.target.value; // Obtenemos el valor seleccionado en el html.
    this.value2 = this.value2.toLowerCase(); // Los valores de las opciones pasan a minúsculas para comparar.
    // Iniciamos indicando que si el valor seleccionado en el botón coincide con el texto el arreglo se mantiene igual a todos los datos traidos desde el back.
    // if (this.value === 'todos') {
    //   this.filteredItems = this.posts;
    // } else {
    //   // En caso de que seleccione otros valores se debe crear un arreglo nuevo con sólo los elementos que llevan ese o esos valores e imprimirlos en el html.
    //   //USAMOS FILTEREDITEMS PARA CONSERVAR LOS CAMBIOS DEL PRIMER FILTRADO
    //   this.filteredItems = this.posts.filter((item) => {
    //     return item.ciudad.toLowerCase() === this.value;
    //   });
    // }
  } //Fin Función applyFilterServices

}
