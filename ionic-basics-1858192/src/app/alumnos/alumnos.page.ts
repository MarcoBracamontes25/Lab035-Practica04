import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router}from '@angular/router'
import { Alumno } from './alumno.model.ts';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[];
  constructor(private alumnoService: AlumnosService, private router: Router) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.getAlumnos();
    this.alumnoService.getPersonajes().subscribe((reponse: any)=>{
      console.log(reponse);
    })
  }
  ionViewWillEnter(){
    this.alumnos=this.alumnoService.getAlumnos();
  }

}
