import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { PeliculaService } from '../../../services/pelicula.service';
import { Pelicula } from '../../../model/pelicula';
import { Director } from '../../../model/director';
import { DirectorService } from '../../../services/director.service';

@Component({
  selector: 'app-crear-pelicula',
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  peliculaForm: FormGroup;
  directores: Director[] = []

  constructor(private titulo: Title, private fb: FormBuilder, private peliculaService: PeliculaService, private directorService: DirectorService
    , private router: Router
  ) {
    this.titulo.setTitle('Agregar Pelicula')

    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required], // Validators.pattern('[A-Za-z+]')
      year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]+')]],
      premio: [false],
      imagen: ['', Validators.required],
      idDirector: ['', Validators.required]

    });
    console.log(this.peliculaForm);

    this.directorService.getDirectores().subscribe(dire => {
      this.directores = dire;
    })
  }

  onSubmit() {
    if (this.peliculaForm.valid) {
      this.peliculaService.getPeliculas().subscribe(peli => {
        const newId = Number(peli[peli.length - 1].id) + 1 // para que se almacena con la id correspondiente
        const idString = String(newId)

        const newPelicula: Pelicula = {
          id: idString,
          ...this.peliculaForm.value,
        }
        this.peliculaService.addPelicula(newPelicula).subscribe(() => {
          peli.push(newPelicula);
          this.peliculaForm.reset()
          this.router.navigate(['/peliculas'])
        })
      })
    }
  }

}
