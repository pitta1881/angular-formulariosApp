//o usamos este archivo exportando como constantes todas las validaciones, o usamos un servicio(validator.service.ts)

import { FormControl, ValidationErrors } from "@angular/forms";

export const nombreApellidoPattern  : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern           : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerAdmin = (control:FormControl):ValidationErrors | null => {
    if(control.value?.trim().toLowerCase() === 'admin'){
      return {
        adminString:true
      }
    } else {
      return null
    }
  }