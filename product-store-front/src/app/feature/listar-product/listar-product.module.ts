import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListarProductComponent } from './components/listar-product.component';
import { CommonModule } from '@angular/common'
import { ListarProductRounting } from './listar-product-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import { MainNavComponent } from 'src/app/core/components/main-nav/main-nav.component';



@NgModule({
    declarations: [
        ListarProductComponent,
        MainNavComponent
    ],
    imports: [
        CommonModule,
        ListarProductRounting,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListarProductModule { }