import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsRepository {
    products: Product[] = [
  {
    id: '1',
    name: "Teclado Mecánico RGB",
    description: "Teclado con switches blue y retroiluminación personalizada.",
    price: 75.99,
    stock: 20,
    imgUrl: "https://example.com/images/teclado.jpg"
  },
  {
    id: '2',
    name: "Ratón Gaming Inalámbrico",
    description: "Sensor óptico de 16000 DPI y batería de larga duración.",
    price: 45.50,
    stock: 50,
    imgUrl: "https://example.com/images/raton.jpg"
  },
  {
    id: '3',
    name: "Monitor 27'' 4K",
    description: "Panel IPS con resolución Ultra HD y bordes ultra delgados.",
    price: 299.99,
    stock: 100,
    imgUrl: "https://example.com/images/monitor.jpg"
  },
  {
    id: '4',
    name: "Auriculares Noise Cancelling",
    description: "Cancelación de ruido activa y sonido de alta fidelidad.",
    price: 120.00,
    stock: 49,
    imgUrl: "https://example.com/images/auriculares.jpg"
  },
  {
    id: '5',
    name: "Alfombrilla XL",
    description: "Superficie de microfibra optimizada para todo tipo de sensores.",
    price: 15.99,
    stock: 80,
    imgUrl: "https://example.com/images/alfombrilla.jpg"
  },
  {
    id: '6',
    name: "Silla Ergonómica Pro",
    description: "Soporte lumbar ajustable y materiales transpirables.",
    price: 185.00,
    stock: 150,
    imgUrl: "https://example.com/images/silla.jpg"
  },
  {
    id: '7',
    name: "Webcam 1080p",
    description: "Micrófono estéreo integrado y corrección de luz automática.",
    price: 55.25,
    stock: 200,
    imgUrl: "https://example.com/images/webcam.jpg"
  },
  {
    id: '8',
    name: "Disco Duro Externo 2TB",
    description: "Conexión USB 3.0 de alta velocidad y diseño compacto.",
    price: 89.99,
    stock: 300,
    imgUrl: "https://example.com/images/disco.jpg"
  },
  {
    id: '9',
    name: "Lámpara de Escritorio LED",
    description: "Diferentes niveles de brillo y carga inalámbrica para móvil.",
    price: 34.00,
    stock: 500,
    imgUrl: "https://example.com/images/lampara.jpg"
  },
  {
    id: '10',
    name: "Soporte para Portátil",
    description: "Aluminio resistente con 6 ángulos de inclinación ajustables.",
    price: 22.50,
    stock: 350,
    imgUrl: "https://example.com/images/soporte.jpg"
  }
];

findAll() {
  return this.products;
}
}
