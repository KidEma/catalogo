import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listOfProducts: Product[];
  
  constructor() { 
    this.listOfProducts = [
      {
        title: 'PC Gamer i7 4770 GTX760 16GB - Sin disco',
        price: 15000,
        description: 'pc gamer'
      },
      {
        title: 'Monitor 24” Samsung SyncMaster 2343nwx ',
        price: 2000,
        description: 'pc gamer'
      },
      {
        title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
        price: 15000,
        description: 'pc gamer'
      },
      {
        title: 'PC Gamer i7 4770 GTX760 16GB - Sin disco',
        price: 15000,
        description: 'pc gamer'
      }
    ]
  }

  ngOnInit() {
        // Get future, public events

    
  }
}
