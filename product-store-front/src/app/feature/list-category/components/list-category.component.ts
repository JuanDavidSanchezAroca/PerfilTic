import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { ListCategoryService } from '../shared/services/list-category.service';
import { Category } from '../shared/interfaces/category';

@Component({
    selector: 'app-list-category',
    templateUrl: './list-category.component.html',
    styleUrls: ['./list-category.component.scss']
  })

export class ListCategoryComponent implements OnInit{
    list:Category[] = [];
    pageActual:number = 1;
    constructor(private listCategoryService: ListCategoryService){}
    ngOnInit(){
        this.getCategories();
    }

    getCategories(){
        this.listCategoryService.listCategories().subscribe(result => {
            if(result){
                this.list = result;
            }else{
                alert('No found data');
            }
        });
    }

    getSubcatogories(elem:Category){
        localStorage.setItem("category",elem.id+'');
        localStorage.setItem("categoryName",elem.name);
        if(elem.subCategories){
            return this.list=elem.subCategories;
        }
        else{
            location.replace("/listar-product")
        }
    }

}