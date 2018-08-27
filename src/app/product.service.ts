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
      description: `
      <p>Micro: Processor Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz, 3601 Mhz, 4 Core(s), 8 Logical Processor(s)</p>
      <p>Placa de video: GeForce Gtx 760 2gb Gddr5</p>
      <p>RAM: CORSAIR — 16GB Dual Channel DDR3 Memory Kit</p>
      <p>Fuente: 800w</p>
      `,
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']
    },
    {
      title: 'Monitor 24” Samsung SyncMaster 2343nwx ',
      price: 2000,
      description: `
      Marca: Samsung
      <br/>
      Modelo: 2343NWX WideScreen
      <br/>      
      Tamaño: 23" Wide
      <br/>    
      Color Externo: Negro
      <br/>         
      Resolución: 2048 x 1152
      <br/>    
     
      Entrada Video: 15-pin D-Sub (analógica)
      <br/>    
      Ángulo de visión: 170º (horizontal) / 160º (vertical)
      <br/>    
      Brillo:300cd/m2
      <br/>    
      Contraste Dinámico: 20.000:1 DC (1000:1)
      <br/>    
      Tiempo de Respuesta: 5ms
      <br/>    
      Características especiales: MagicBright / MagicWizard / MagicTune / Magic Key
      <br/>    
      Montable en pared: VESA 100mm
      <br/>    
      Medidas con Pie: 54,46 x 40,88 x 2,27 cm
      <br/>    
      Medidas sin Pie: 54,46 x 32,3 x 7,29 cm
      <br/>    
      Peso: 5,4 Kg.
      <br/>    
      Alimentación: 220v
      <br/>    
      Consumo: 44W
      <br/>    
      Compatibilidad: PC y Mac
      `,
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']
    },
    {
      title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
      price: 2500,        
      description: `
      Originalmente me había comprado el Bundle  Razer Cynosa Pro + Mouse Deathadder, (que ahora está alrededor de 3K en ML).
      El teclado sufrió un accidente así que lo reemplacé por el Deathstalker Chroma, que nuevo anda por los 4K. La diferencia con el 
      Deathstalker común es que podés elegir el color o tiene esos modos copados de color dinámico.
      El Deathstalker común es de un verde medio fiero que no combinaba con el mouse.

      `,
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },      {
      title: 'Silla para PC - Sillón Ejecutivo',
      price: 2500,        
      description: `
      Está como nueva, la compré hace menos de un año. Nueva anda por los 4K.
      Es súper acolchada, el respaldo es alto, se reclina y es ajustable.
      <p>Características:</p>
      <ul>
      <li>Basculante (se reclina hacia atras)</li>
      
      <li>Asiento y respaldo de ecocuero</li>
      
      <li>Acolchado con doble capa</li>
      
      <li>Apoyabrazos revestidos con ecocuero</li>
      
      <li>Costuras de calidad</li>
      
      <li>Regulación suave de la altura con sistema a gas</li>
      
      <li>Ruedas reforzadas</li>
      
      <li>Gira 360°</li>
      <ul>
     <p>Medidas:</p>
      Asiento: Ancho 48, Espesor 10, Prof. 49
      <br/>
      Altura (del piso al asiento): Min. 36, Max. 45 .
      <br/>      
      Respaldo: Alto 65, Espesor 11
      <br/>      
      Apoyabrazos: 40
      <br/>
      `,
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },      {
      title: 'Parlantes Edifier e3100 ',
      price: 2000,        
      description: '2.1 - Excelente calidad de sonido.',
      imageUrls: ['https://i.imgur.com/VnYBe3m.jpg']


    },
    {
      title: 'Escritorio para PC - Ideal oficina - Home Office',
      price: 1500,        
      description: `
      Tiene una parte rebatible, lo que lo hace ideal para lugares chicos o para uso temporal (yo lo tenía para 
      trabajo en home office).
      Lo dejo barato porque tiene detalles de quemadura en la superficie.
      `,
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
