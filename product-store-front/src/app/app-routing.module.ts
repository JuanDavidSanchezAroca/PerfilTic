import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { ListarProductComponent } from './feature/listar-product/listar-product.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
   }, {
        path: 'listar-productos', component: ListarProductComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
