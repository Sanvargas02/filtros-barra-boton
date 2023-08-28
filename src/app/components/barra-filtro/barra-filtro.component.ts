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
      service: 'hotel'
    },
    {
      id: 2,
      title: 'Paragón Plaza',
      date: '02/04/2022',
      service: 'Restaurante'
    },
    {
      id: 3,
      title: 'Carne a la Llanera',
      date: '02/04/2021',
      service: 'motel'
    },
    {
      id: 4,
      title: 'Otro restaurant',
      date: '02/04/2020',
      service: 'Hoyo feo'
    },
    {
      id: 5,
      title: 'Ultima búsqueda',
      date: '02/04/2019',
      service: 'Cancha'
    }
  ]

  //Pasamos todo nuestros datos a un arreglo nuevo para trabajarlo e imprimirlo en html
  filteredItems: any[] = this.posts;

  //Función para filtrar por medio del botón
  applyFilter(selectedCategory: any) {
    let value = selectedCategory.target.value; // Obtenemos el valor seleccionado en el html
    value = value.toLowerCase(); //Los valores de las opciones pasan a minúsculas para comparar
    if (value === 'todos') {
      this.filteredItems = this.posts;
    } else {
      this.filteredItems = this.posts.filter(item => item.service.toLowerCase() === value);
    }
  }


}
