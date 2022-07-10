import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [];

  animal: Animal ={
    name: 'Gigante',
    type: 'Dog',
    age: 10,
  };

  animalDetails = '' // variavel vazia para receber os dados do pet

  constructor(private listservice: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  // metodo
  showAge(animal: Animal): void {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos!`
  } // envia os dados para a variavel. Precisa ser (animal: Animal) porque a função inicial foi declarada como any

  // remover 1 ou todos os animais da lista
  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listservice.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listservice.getAll().subscribe((animals) => {this.animals = animals});
  }
}
