import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-recuperarc',
  templateUrl: './recuperarc.page.html',
  styleUrls: ['./recuperarc.page.scss'],
})
export class RecuperarcPage implements OnInit {

  formularioRecuperarc: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRecuperarc= this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
    
   }
  ngOnInit() {
  }

}
