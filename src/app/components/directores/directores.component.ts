import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Director } from '../../model/director';
import { DirectorService } from '../../services/director.service';

@Component({
  selector: 'app-directores',
  imports: [CommonModule, RouterModule],
  templateUrl: './directores.component.html',
  styleUrl: './directores.component.css'
})

export class DirectoresComponent {

  directores: Director[] = []

  constructor(private titulo: Title, private directorService: DirectorService) {
    this.titulo.setTitle('NightmareBox-Directores')
  }

  ngOnInit(): void {
    this.directorService.getDirectores().subscribe((dire) => {
      this.directores = dire;
    })
  }

}
