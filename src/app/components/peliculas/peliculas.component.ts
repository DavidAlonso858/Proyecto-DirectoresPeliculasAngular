import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../model/pelicula';

@Component({
  selector: 'app-peliculas',
  imports: [RouterModule, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent {

  peliculas: Pelicula[] = []

  constructor(private titulo: Title, private peliculaService: PeliculaService) {
    this.titulo.setTitle('NighmareBox-Peliculas')
  }

  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe((peli) => {
      this.peliculas = peli;
    })
  }
}
