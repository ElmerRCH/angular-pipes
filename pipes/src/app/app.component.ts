import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe,LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  nombre: string = 'pruebas'
}
