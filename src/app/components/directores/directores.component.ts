import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-directores',
  imports: [],
  templateUrl: './directores.component.html',
  styleUrl: './directores.component.css'
})

export class DirectoresComponent {

  constructor(private titulo: Title) {
    titulo.setTitle('NightmareBox-Directores')
  }

  
}
