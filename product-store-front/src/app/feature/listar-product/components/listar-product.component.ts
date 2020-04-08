import { Component, OnInit, Input } from '@angular/core';
import { ListProductsService } from '../shared/services/list-products.service';
import { Product } from 'src/app/feature/listar-product/shared/interfaces/product';
import { Category } from '../../list-category/shared/interfaces/category';
import { ListCategoryComponent } from '../../list-category/components/list-category.component';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CurrencyService } from '../shared/services/currency.service';
import { Currency } from '../shared/interfaces/currency';

@Component({
  selector: 'app-listar-product',
  templateUrl: './listar-product.component.html',
  styleUrls: ['./listar-product.component.scss']
})
export class ListarProductComponent implements OnInit {
  lista: Product[] = [];
  currency: Currency;
  pageActual:number = 1;
  message = '';
  category:string;
  categoryName:string;
  constructor(private service: ListProductsService,
              private serviceCurrency: CurrencyService) { }

  ngOnInit() {
    this.getProducts();
    this.getUsd();
  }
   
   getProducts() {
     this.category= localStorage.getItem('category');
     this.categoryName= localStorage.getItem('categoryName');
     this.service.listProducts(parseInt(this.category)).subscribe(result => {
       if (result) {
        this.lista = result;
       } else {
        alert('No se encontraron datos');
       }
     },
     err =>{
      const error = err as HttpErrorResponse;
    
      if(error.status === 403){
  
        this.message = 'Tiempo agotado';
        
      }else{
        this.message = String(err.error.message);
      }
      Swal.fire('Oops',this.message,'error');
      location.replace('/login');
    });
   }
   getUsd(){
     this.serviceCurrency.getUsdPrice().subscribe(result =>{
       if(result){
         this.currency = result;
         console.log(this.currency.quotes.USDCOP);
       }else{
         console.log('Nada');
       }
     });
   }
}
