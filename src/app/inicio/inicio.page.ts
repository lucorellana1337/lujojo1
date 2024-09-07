import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // Asegúrate de definir la propiedad 'nombreUsuario'
  nombreUsuario: string = '';  // Declarar la variable

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el nombre del usuario desde los parámetros de navegación
    this.route.queryParams.subscribe(params => {
      if (params['nombre']) {
        this.nombreUsuario = params['nombre']; // Asignar el nombre del usuario
      }
    });
  }
}
