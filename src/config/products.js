/* eslint-disable spaced-comment */
const PRODUCTS = [
  {
    id: 0,
    name: 'Solomillo',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes a lo largo', 'Filete medallones'],
  },
  {
    id: 0,
    name: 'Secreto',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Secreto',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Lomo Adobado',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Lomo ahumado',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Carrillera',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entera', 'Entera limpia'],
  },
  {
    id: 0,
    name: 'Chuleta de lomo ahumada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Chuleta de cabezada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Chuleta de cabezada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['con piel', 'sin piel'],
  },
  {
    id: 0,
    name: 'Jamón adobado',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entero', 'Filetes'],
  },
  {
    id: 0,
    name: 'Paleta entera',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['con piel', 'sin piel'],
  },
  {
    id: 0,
    name: 'Paleta deshuesada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Entera con piel', 'Entera sin piel', 'troceada'],
  },
  {
    id: 0,
    name: 'Panceta',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'Filetes', 'corte torrezno'],
  },
  {
    id: 0,
    name: 'Panceta con costilla',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'cortada a lo largo'],
  },
  {
    id: 0,
    name: 'Panceta adobada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['en trozo', 'filetes'],
  },
  {
    id: 0,
    name: 'Oreja fresca',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'partida', 'troceada'],
  },
  {
    id: 0,
    name: 'Oreja adobada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'partida', 'troceada'],
  },
  {
    id: 0,
    name: 'Careta fresca',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'media'],
  },
  {
    id: 0,
    name: 'Careta adobada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera'],
  },
  {
    id: 0,
    name: 'Rabo de cerdo fresco',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entero', 'troceado'],
  },
  {
    id: 0,
    name: 'Rabo adobado',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entero', 'troceado'],
  },
  {
    id: 0,
    name: 'Papada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['con piel entera', 'con piel filetes', 'sin piel filetes'],
  },
  {
    id: 0,
    name: 'Costilla',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera sin piel', 'sin piel cortada ', 'entera con piel entera', 'con piel cortada'],
  },
  {
    id: 0,
    name: 'Costilla adobada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'en trozo'],
  },
  {
    id: 0,
    name: 'Costilla ahumada',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'palo a palo'],
  },
  {
    id: 0,
    name: 'Guisar carrillera pequeña',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [''],
  },
  {
    id: 0,
    name: 'Hígado',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['Filetes', 'en trozo'],
  },
  {
    id: 0,
    name: 'Riñón',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [],
  },
  {
    id: 0,
    name: 'Pulmón por unidad',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [],
  },
  {
    id: 0,
    name: 'Patas de cerdo',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['fresca entera', 'fresca cortada', 'adobada entera', 'adobada troceada'],
  },
  {
    id: 0,
    name: 'Cabeza de cerdo por unidad',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: ['entera', 'cortada'],
  },
  {
    id: 0,
    name: 'Tocino',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [],
  },
  {
    id: 0,
    name: 'Piel de cerdo por unidad',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [],
  },
  {
    id: 0,
    name: 'Callos o cuajos por unidad',
    description: '',
    price: {
      ref: 12,
      offer: 0,
      discount: '10%',
    },
    image: 'https://image.shutterstock.com/image-photo/meat-pork-slices-loin-on-600w-561686899.jpg',
    categoryId: 'cerdo',
    stock: {
      quantity: 0,
    },
    extras: [],
  },
]

export default PRODUCTS
//
//
//
// ---------------------------------------------------------------
// Chuleta de lomo
//Chuleta de lomo entera
//Chuleta de lomo lisa filetes
//Chuleta de lomo veteada filetes
//
// Jamón deshuesado
//Jamón deshuesado magro entero
//Jamón deshuesado filetes (finos, normales y gruesos)
