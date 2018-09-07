import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../product.service'
import {Location} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listOfProducts: Product[];
  public listOfSoldProducts: Product[];
  
  constructor(public productService: ProductService, private location: Location) { 
  }

  ngOnInit() {
        // Get future, public events
        this.listOfProducts = this.productService.getNotSoldProducts();
        this.listOfSoldProducts = this.productService.getSoldProducts();
    
  }

}
