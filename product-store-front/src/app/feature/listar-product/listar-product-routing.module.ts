import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { ListarProductComponent } from './components/listar-product.component';

const routes: Routes = [
    {
        path: '',
        component: ListarProductComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ListarProductRounting{}