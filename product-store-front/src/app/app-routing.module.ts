import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { ListarProductComponent } from './feature/listar-product/components/listar-product.component';
import { SecurityGuard } from './core/guard/security.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full',redirectTo:'login'},
  {path:"",canActivate:[SecurityGuard],
    children :[
        {
          path:"listar-product",
          loadChildren: () => import('./feature/listar-product/listar-product.module').then(m => m.ListarProductModule)
        },
        {
          path:"list-category",
          loadChildren: () => import('./feature/list-category/list-category.module').then(m => m.ListCategoryModule)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
