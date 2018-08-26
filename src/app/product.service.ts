import { Injectable } from '@angular/core';
import {Product} from './classes/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      title: 'PC Gamer i7 4770 GTX760 16GB - Sin disco',
      price: 15000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']
    },
    {
      title: 'Monitor 24” Samsung SyncMaster 2343nwx ',
      price: 2000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },
    {
      title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
      price: 15000,        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },      {
      title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
      price: 15000,        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },      {
      title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
      price: 15000,        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },
    {
      title: 'PC Gamer i7 4770 GTX760 16GB - Sin disco',
      price: 15000,        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing. Et ultrices neque ornare aenean euismod elementum nisi. Vitae nunc sed velit dignissim sodales. At urna condimentum mattis pellentesque id nibh tortor. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque massa placerat duis ultricies lacus sed turpis. Purus semper eget duis at. Tortor id aliquet lectus proin. Molestie a iaculis at erat pellentesque. Id nibh tortor id aliquet lectus proin nibh. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vehicula ipsum a arcu cursus vitae congue mauris. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nisl purus in mollis nunc sed. Aliquet lectus proin nibh nisl condimentum id. Montes nascetur ridiculus mus mauris vitae ultricies leo. Eget nunc scelerisque viverra mauris in. Fermentum posuere urna nec tincidunt praesent. Viverra maecenas accumsan lacus vel facilisis.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    }
  ];

   getProducts() : Product[]{
    return this.products;
  }

   getProduct(title : string) : Product{
    return this.products.filter(p => p.title === title)[0];
  }

  constructor() { 
  }
}
