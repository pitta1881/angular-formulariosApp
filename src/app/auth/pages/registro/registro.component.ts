import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username:['',[Validators.required,this.validatorService.noPuedeSerAdmin]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  },{
    validators:[this.validatorService.camposIguales('password','password2')]
  })

  get getEmailErrorMsg():string {
    const errors = this.miFormulario.controls.email.errors;
    if(errors?.required){
      return 'El Email es obligatorio'
    } else if(errors?.pattern){
      return 'El valor ingresado no tiene formato de email'
    } else if(errors?.emailYaUsado){
      return 'El email ya está tomado'
    } else {
      return ''
    }
  }

  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Patricio Pittavino',
      email:'test1@test.com',
      username:'pitta1881',
      password:'123123',
      password2:'123123',
    })
  }

  validarCampo(campo:string){
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].invalid
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }

}
