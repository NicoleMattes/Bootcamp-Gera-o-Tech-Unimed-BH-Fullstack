import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/core/models/book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  book!: BookModel;

  constructor() { }

  ngOnInit(): void {
  }

}
