import { Component, OnInit } from '@angular/core';
import datos from './datos.json';
import { DatePipe } from '@angular/common';
import {Title} from "@angular/platform-browser";  
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent implements OnInit {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Plataforma de Conocimientos");
  }

  estado: any = '';
  public detalles: {
    Title: string;
    picture: any;
    about: string;
    more_info: string;
    fecha_limite: any;
    categoria: string;
    tags: string;
  }[] = datos;
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe: any = null;
  selected = 'todas';
  onClick() {
    this.estado = localStorage.setItem('estado', 'visto');
  }
  navigate() {
    this.estado = localStorage.setItem('estado', 'visto');
  }
  ngOnInit(): void {
    this.estado = localStorage.getItem('estado');
    this.todayWithPipe = this.pipe.transform(Date.now(), 'yyyy-MM-dd');
  }
}
