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
      imageUrls: [
        'https://imgur.com/ZJ8mZIt.jpg',
        'https://imgur.com/sV4nKd4.jpg',
        'https://imgur.com/mGeHQXj.jpg',
        'https://imgur.com/kMwUYP2.jpg',
        'https://imgur.com/Ai5xb9s.jpg',
        'https://imgur.com/EICgryI.jpg',
        'https://imgur.com/sKuoyNt.jpg'

      ]
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
      imageUrls: [
        'https://imgur.com/1CLVObD.jpg',
        'https://imgur.com/KUrBHqm.jpg',
        'https://imgur.com/tAPaKDD.jpg',
        'https://imgur.com/RpXwnWI.jpg',
      ]
    },
    {
      title: 'Teclado Razer DeathStalker Chroma + Mouse razer DeathAdder - como nuevo',
      price: 2500,        
      description: `
      Originalmente me había comprado el Bundle  Razer Cynosa Pro + Mouse Deathadder (que ahora está alrededor de 3K en ML).
      El teclado sufrió un accidente así que lo reemplacé por el DeathStalker Chroma, que nuevo anda por los 4K. La diferencia con el 
      Deathstalker común es que podés elegir el color o tiene esos modos copados de color dinámico.
      El Deathstalker común es de un verde medio fiero que no combinaba con el mouse.

      `,
      imageUrls: [
        'https://imgur.com/jlpP6vZ.jpg',
        'https://imgur.com/5aqBct0.jpg',
        'https://imgur.com/Qz6X24q.jpg',
        'https://imgur.com/Ojh2cjr.jpg',
      ]


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
      <br/>
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
      imageUrls: [
        'https://imgur.com/hXTBD3t.jpg', 
        'https://imgur.com/voLhYrK.jpg', 
        'https://imgur.com/QoIc912.jpg',         
       ]


    },      {
      title: 'Parlantes Edifier e3100 - 2.1',
      price: 1800,        
      description: `
      Tienen aproximadamente cuatro años, pero funcionan perfecto y no tienen ningún detalle.
      <br/>
      
      Woofer y Satélites 100% fabricados en madera MDF.
      <br/>

      5' woofer (131mm) de alta performance, antimagnético.
      <br/>

     Satelites con parlantes de 2 vias, tweeter de PV.– Control de volumen, ajuste de graves y agudos. – 100 % antimagnético.– Panel frontal hecho en aluminio, estilo futurista. – Fuente hecho especialmente con 40W MAX de potencia. – Chipset de Hi-Fi, (pre-amp: NE5532) 
      `,
      imageUrls: [
        'https://imgur.com/RWksjkW.jpg',
        'https://imgur.com/2bJ5t42.jpg'
      ]


    },
    {
      title: 'Escritorio para PC - Ideal oficina - Home Office',
      price: 1500,        
      description: `
      Tiene una parte rebatible, lo que lo hace ideal para lugares chicos o para uso temporal (yo lo tenía para 
      trabajo en home office).
      Lo dejo barato porque tiene detalles de quemadura en la superficie.
      `,
      imageUrls: [
        'https://imgur.com/7BaGMTq.jpg',
        'https://imgur.com/pfd7XMT.jpg',
        'https://imgur.com/ESq2tyH.jpg',
      ]
    },
    {
      title: 'Pava Eléctrica Peabody Gris Metálico',
      price: 600, 
      sold: true,
      description: `
      Impecable, poco uso. Funciona perfecto. Nueva ronda los 1300 pesos.
      `,
      imageUrls: [
        'https://imgur.com/00UTHai.png',
        'https://imgur.com/ahRow7N.png',
        'https://imgur.com/JlB4URG.png'
      ]
    },
    {
      title: 'Cajonera Melaminada Blanca Hecha a Medida',
      price: 3800,
      sold: true,
      description: `
      Nueva, tiene menos de dos años. Está impecable, no tiene ni un detalle.
      Super compacta, pero es donde guardo toda la ropa de temporada y los zapatos.
      Tiene 6 cajones y un compartimiento con dos estantes para calzado.
      Mide 142 largo x 110 alto x 42 profundidad.
      <br/>
      Mandar a hacer este mueble de nuevo no baja de los 8000 pesos.
      `,
      imageUrls: [
        'https://i.imgur.com/tYIRzVn.jpg',
        'https://i.imgur.com/W7YVx8f.jpg',
        'https://i.imgur.com/qWlP8Ov.jpg',
        'https://i.imgur.com/tYIRzVn.jpg',
        'https://i.imgur.com/k1q5DkS.jpg'
        
        
    ]
    },
    {
      title: 'Mesita de Luz Melaminada Blanca',
      price: 1300,        
      description: `
      Nueva, tiene menos de un año. Está impecable, no tiene ni un detalle.
      <br/>
      Tiene dos estantes, un cajón y un desayunador.
      <br/>
      Mide 73 alto x 48 ancho x 45.
      `,
      imageUrls: ['https://imgur.com/qX9h4Nx.jpg']
    },
    {
      title: 'Nespresso Inissia Roja + Aeroccino 3 Negro',
      price: 2300,        
      sold: true,
      description: `
        La famosísima cafetera.
        <br/> 
        Tiene menos de un año. Es súper práctica y fácil de limpiar.
        El kit nuevo anda por encima de los 4K. 
      `,
      imageUrls: ['https://imgur.com/qX9h4Nx.jpg']
    },
    {
      title: 'Barra Blanca Pintada - Sirve como mostrador',
      price: 1800,        
      description: `
      Necesita una mano de pintura en la parte superior. Por demás, está perfecta.
      <br/>      
      Tiene dos puertas corredizas y tres estantes adentro. Ideal para guardar vajilla, bebidas, utencillos de cocina.
      Sirve también como mostrador (es lo que era originalmente cuando la compré) ya que es vistosa de ambos lados.
      <br/>
      Mide 152 alto x 97 ancho x 52.
      `,
      imageUrls: [
        'https://i.imgur.com/skkDm1m.jpg',
        'https://i.imgur.com/kAfrLLu.jpg',
        'https://i.imgur.com/7DDeCbF.jpg'
      ]
    },
    {
      title: 'Sillas Plásticas con patas de caño negras',
      price: 400,        
      description: `
      Son apilables, y resistentes en exteriores. Ideal para sentarse a tomar unos mates en el balcón.
      El precio es por las dos.
      `,
      imageUrls: [
        'https://i.imgur.com/vD2EQHK.jpg',
        'https://i.imgur.com/MsJoQti.jpg',
    ]
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
