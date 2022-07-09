import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/core/models/book.model';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookList!: BookModel[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.productsService.getBooks().subscribe(data => {
      this.bookList = data
    });
  }

}
