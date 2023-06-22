import { Component } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  movies_series : MoviesSeries[] = [
    {
      id: 1,
      name: 'Fast & Furious X',
      description: 'Durante numerosas misiones más que imposibles, Dom Toretto y su familia han sido capaces de ser más listos, de tener más valor y de ir más rápido que cualquier enemigo que se cruzara con ellos.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3P9QvWVN02Etn4kYGC702WVoXEb.jpg',
      rating: '74%',
      category: 'Movie'
    },
    {
      id: 2,
      name: 'Amor Perfeito',
      description: 'No tenemos una sinopsis en español. Ayúdamos a ampliar nuestra base de datos añadiendo una.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aOPhyvHDauWFuc3rthpHArCNyrm.jpg',
      rating: '42%',
      category: 'Serie'
    },
    {
      id: 3,
      name: 'The Blacklist',
      description: 'El criminal más buscado del mundo, Thomas Raymond Reddington, se entrega misteriosamente y se ofrece a delatar a todos los que alguna vez han colaborado con él.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2jDYeTaDSIYnVOS4BD3d17JBkfP.jpg',
      rating: '76%',
      category: 'Serie'
    },
    {
      id: 4,
      name: 'Spider-Man: Cruzando el Multiverso',
      description: 'Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg',
      rating: '88%',
      category: 'Movie'
    },
    {
      id: 5,
      name: 'Spider-Man: Cruzando el Multiverso',
      description: 'Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg',
      rating: '88%',
      category: 'Movie'
    },
    {
      id: 6,
      name: 'The Blacklist',
      description: 'El criminal más buscado del mundo, Thomas Raymond Reddington, se entrega misteriosamente y se ofrece a delatar a todos los que alguna vez han colaborado con él.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2jDYeTaDSIYnVOS4BD3d17JBkfP.jpg',
      rating: '76%',
      category: 'Serie'
    },
    {
      id: 7,
      name: 'Spider-Man: Cruzando el Multiverso',
      description: 'Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg',
      rating: '88%',
      category: 'Movie'
    },
    {
      id: 8,
      name: 'Amor Perfeito',
      description: 'No tenemos una sinopsis en español. Ayúdamos a ampliar nuestra base de datos añadiendo una.',
      image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aOPhyvHDauWFuc3rthpHArCNyrm.jpg',
      rating: '42%',
      category: 'Serie'
    },
  ];

  filter: 'Todos' | 'Peliculas' | 'Series' = 'Todos';

  changeFilter = (filtro: 'Todos' | 'Peliculas' | 'Series') => {
    this.filter = filtro;
  } 
}
