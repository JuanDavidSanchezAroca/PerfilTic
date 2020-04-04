import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../../shared/service/list-products.service';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-listar-product',
  templateUrl: './listar-product.component.html',
  styleUrls: ['./listar-product.component.scss']
})
export class ListarProductComponent implements OnInit {
  lista: any[];
  constructor(private service: ListProductsService) { }

  ngOnInit() {
    this.lista = this.retornar();
    console.log(this.lista);
  }

  retornar(): Product[] {
    const products: Product[] = [
      {productCode: '1', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/Lavadora.jpg']},
      {productCode: '2', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/Lavadora.jpg']},
      {productCode: '3', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/large08.jpg']},
      {productCode: '4', name: 'Lavadaora', description: 'Lavadora', price: 100, priceUSD: 30, images: ['../../../assets/large08.jpgx']}
    ];
    return products;
   }
   getProducts() {
     this.service.listProducts().subscribe(result => {
       if (result) {
        this.lista = result;
       } else {
        alert('No se encontraron datos');
       }
     });
   }
}
