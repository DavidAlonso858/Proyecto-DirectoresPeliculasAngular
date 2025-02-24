import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  imports: [RouterModule],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

  constructor(private titulo: Title) {
    titulo.setTitle('NightmareBox')
  }
}
