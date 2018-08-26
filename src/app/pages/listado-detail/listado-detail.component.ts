import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listado-detail',
  templateUrl: './listado-detail.component.html',
  styleUrls: ['./listado-detail.component.css']
})
export class ListadoDetailComponent implements OnInit {
  public product : Product;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
) { }

  ngOnInit() {
    this.product = this.getProduct();

  }

  getProduct(){
    const id = this.route.snapshot.paramMap.get('title');
    return this.productService.getProduct(id);

  }

  
  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
