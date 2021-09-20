import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  miFormulario:FormGroup = this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    condiciones:[false,Validators.requiredTrue]
  })

  persona = {
    genero : 'F',
    notificaciones: true
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false
    })    
  }

  guardar(){
    if(this.miFormulario.valid){
      const {condiciones,...rest} = this.miFormulario.value
      this.persona = rest
    }
  }


}
