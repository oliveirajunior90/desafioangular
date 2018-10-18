import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-mostrar-erro',
  templateUrl: './form-mostrar-erro.component.html',
  styleUrls: ['./form-mostrar-erro.component.css']
})
export class FormMostrarErroComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;
  
  constructor() { }
  
  ngOnInit() {
  }

}
