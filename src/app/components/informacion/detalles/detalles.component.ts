import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import datos from '../datos.json';
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router"
import {Title} from "@angular/platform-browser";  

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  public titulo: { Title: string } = datos;

  constructor(private rutaActiva: ActivatedRoute, private router: Router,private titleService:Title) {
    this.titleService.setTitle(this.rutaActiva.snapshot.params['nombre']);
  }

  ngOnInit() {
    this.titulo = {
      Title: this.rutaActiva.snapshot.params['nombre'],
    };
    this.todayWithPipe = this.pipe.transform(Date.now(), 'yyyy-MM-dd');
  }
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: any = null;
  public detalles: {
    Title: string;
    more_info: string;
    picture: string;
    link: string;
    fuente: string;
    fecha_limite: string;
  }[] = datos;
  redirect(){
    this.router.navigate(['/home'])
  }
}
