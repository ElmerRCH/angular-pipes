import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe,LowerCasePipe,SlicePipe,CurrencyPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,SlicePipe,CurrencyPipe,PercentPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre: string = 'pruebas'
  array = [1,2,3,4,5,6,7,8,9]
  porcentaje = .234
  salario = 12345

}
