import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-modal-json',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-json.component.html',
  styleUrl: './modal-json.component.css'
})
export class ModalJsonComponent {
  @Input() json:any = {}

  @Output() modal: EventEmitter<boolean>;
  
  constructor(){
    this.modal = new EventEmitter()
    
  }


  closeModal(){
    this.modal.emit()

  }
}
