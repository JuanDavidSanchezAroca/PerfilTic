import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ListCategoryComponent } from './components/list-category.component';
import { MainNavComponent } from 'src/app/core/components/main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListCategoryRouting } from './list-category-routing.module';

@NgModule({
    declarations: [
        ListCategoryComponent,
        MainNavComponent
    ],
    imports: [
        CommonModule,
        ListCategoryRouting,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ListCategoryModule {}