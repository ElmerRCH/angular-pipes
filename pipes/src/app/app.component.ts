import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ModalJsonComponent } from './components/modal-json/modal-json.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ModalJsonComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  modalActive = false

  nombre: string = 'pruebas'
  array = [1,2,3,4,5,6,7,8,9]
  porcentaje = .234
  salario = 12345
  heroe = {
    nombre : ' Logan',
    edad : 500,
    clave:'Wolverine',
    direccion:{
      calle:'Primera',
      casa:200
    }
    
  }
  
  verJson(){
    this.modalActive = true
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeModal(){
    
    this.modalActive = false
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    
  }
}
