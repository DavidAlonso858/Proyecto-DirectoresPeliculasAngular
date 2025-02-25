import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../model/pelicula';
import { Director } from '../../model/director';
import { DirectorService } from '../../services/director.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-peliculas',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent {

  peliculas: Pelicula[] = []
  peliculasFiltro: Pelicula[] = []
  directores: Director[] = []
  categoriaPredeterminada: string = 'todas';

  constructor(private titulo: Title, private peliculaService: PeliculaService, private directorService: DirectorService) {
    this.titulo.setTitle('NighmareBox-Peliculas')
  }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((peli) => {
      this.peliculas = peli;
      this.filtradoPorDirectores(this.categoriaPredeterminada);
    })

    this.directorService.getDirectores().subscribe((dire) => {
      this.directores = dire;
    })
  }

  filtradoPorDirectores(filtro: string) {

    if (filtro && filtro !== "todas") {
      this.peliculasFiltro = this.peliculas.filter(p => p.idDirector == filtro);
    } else {
      console.log(this.peliculas);
      
      this.peliculasFiltro = [...this.peliculas]
    }
  }

}
