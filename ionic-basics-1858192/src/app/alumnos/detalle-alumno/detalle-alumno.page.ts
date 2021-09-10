import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../alumno.model.ts';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
idAlumno: string;
alumno: Alumno;
  constructor(private activatedRoute: ActivatedRoute, 
private alumnoService: AlumnosService){}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      this.idAlumno=paramMap.get('idAlumno');
      this.alumno=this.alumnoService.getAlumno(this.idAlumno);
      
    });
  }
borrarAlumno(){
  this.alumnoService.borrarAlumno(this.idAlumno);
}

}
