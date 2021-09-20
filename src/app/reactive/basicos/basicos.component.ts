import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario:FormGroup = new FormGroup({
  //   nombre:       new FormControl('RTX 4080'),
  //   precio:       new FormControl(1500),
  //   existencias:  new FormControl(5)
  // })

  miFormulario:FormGroup = this.fb.group({
    nombre:       [,[Validators.required,Validators.minLength(3)]],
    precio:       [,[Validators.required,Validators.min(0)]],
    existencias:  [,[Validators.required,Validators.min(0)]],
  })
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({     //con .setValue hay que setear si o si todos los campos
      nombre: 'RTX 4080',
      precio: 1500
    })
  }

  validateField(campo:string){
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
    } else {
      this.miFormulario.reset()
    }
  }

}
