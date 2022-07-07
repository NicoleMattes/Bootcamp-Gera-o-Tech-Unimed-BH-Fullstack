import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome: string = "Nicole";
  age: number = 26;
  job = 'Programadora';
  hobbies = ['Jogar', 'Andar de Patins', 'Fazer replicas em 3D'];
  car = {
    marca: 'Peugeot',
    ano: 2022,
    modelo: "206 Gasolina"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
