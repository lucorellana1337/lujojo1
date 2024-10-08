import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              private router: Router) {  // Inyecta el Router
    this.formularioLogin = this.fb.group({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() { }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuario = localStorage.getItem('usuario');

    if (usuario !== null) {
      var user = JSON.parse(usuario);
      if (user.nombre === f.nombre && user.password === f.password) {
        // Redirigir a la página de inicio con el nombre del usuario
        this.router.navigate(['/inicio'], {
          queryParams: { nombre: user.nombre }
        });
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados son incorrectos.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No existe ningún usuario registrado.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
}
