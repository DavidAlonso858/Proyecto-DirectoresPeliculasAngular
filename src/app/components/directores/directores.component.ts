import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Director } from '../../model/director';
import { DirectorService } from '../../services/director.service';
import { Map, tileLayer, marker } from 'leaflet';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-directores',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './directores.component.html',
  styleUrl: './directores.component.css'
})

export class DirectoresComponent {

  directores: Director[] = []

  constructor(private titulo: Title, private directorService: DirectorService, private cdr: ChangeDetectorRef) {
    this.titulo.setTitle('NightmareBox-Directores')
  }

  ngOnInit(): void {
    this.directorService.getDirectores().subscribe((dire) => {
      this.directores = dire;
      this.cdr.detectChanges() // PARA EL MAPA
      this.mostrarMapas()
    })
  }

  private mostrarMapas(): void {
    // MAPA PARA CADA DIRECTOR
    this.directores.forEach((director) => {
      console.log(director);

      //PILLO LA ID PUESTA EN EL HTML DONDE SE VA A INSERTAR EL MAPA 
      const map = new Map('map' + director.id).setView([director.coordenadas.lat, director.coordenadas.long], 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      marker([director.coordenadas.lat, director.coordenadas.long]).addTo(map)
        .bindPopup('Lugar de nacimiento')
        .openPopup();
    }
    );
  }
}