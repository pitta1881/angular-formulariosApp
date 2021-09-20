import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario:FormGroup = this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required],
    ],Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('',Validators.required)

  get getFavoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
    } else {
      console.log(this.miFormulario.value)
      this.miFormulario.reset()
    }
  }

  validateField(campo:string){
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){ return; } 
    this.getFavoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset()
  }

  borrarFavorito(indice:number){
    this.getFavoritosArr.removeAt(indice)

  }

}
