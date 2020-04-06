import { Component, OnInit, Input } from '@angular/core';
import { ListProductsService } from '../shared/services/list-products.service';
import { Product } from 'src/app/feature/listar-product/shared/interfaces/product';
import { Category } from '../../list-category/shared/interfaces/category';
import { ListCategoryComponent } from '../../list-category/components/list-category.component';

@Component({
  selector: 'app-listar-product',
  templateUrl: './listar-product.component.html',
  styleUrls: ['./listar-product.component.scss']
})
export class ListarProductComponent implements OnInit {
  lista: Product[] = [];
  pageActual:number = 1;
  constructor(private service: ListProductsService) { }

  ngOnInit() {
    this.getProducts();
    console.log(this.lista);
  }
   
   getProducts() {
     this.service.listProducts(12).subscribe(result => {
       if (result) {
        this.lista = result;
       } else {
        alert('No se encontraron datos');
       }
     });
   }
}
