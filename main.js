const productos = [
  {
    id: 1,

    category: "Carros",

    description: "Sedan dos puertas.",

    image: "./assets/2003_infiniti_g35_coupe_base_fq_oem_1_1600.avif",

    price: 8000,

    rate: 4.7,

    title: "2003 Infiniti G35",
  },

  {
    id: 2,

    category: "Carros",

    description: "Sedan cuatro puertas.",

    image: "./assets/2020-Mercedes-AMG-CLA-45-4Matic-3-1.avif",

    price: 45000,

    rate: 4.9,

    title: "2020 Mercedes-Benz CLA",
  },

  {
    id: 3,

    category: "Carros",

    description: "Sedan cuatro puertas.",

    image: "./assets/01-2011-chevrolet-cruze-1lt.jpg",

    price: 9000,

    rate: 4.5,

    title: "2011 Chevrolet Cruze",
  },

  {
    id: 4,

    category: "Carros",

    description: "Suv cuatro puertas.",

    image: "./assets/2013-nissan-pathfinder_100405945_h.jpg",

    price: 21000,

    rate: 4.8,

    title: "2013 Nissan Pathfinder",
  },

  {
    id: 5,

    category: "Carros",

    description: "Suv cuatro puertas.",

    image: "./assets/254376.avif",

    price: 27000,

    rate: 4.8,

    title: "2016 Mazda CX9",
  },

  {
    id: 6,

    category: "Carros",

    description: "Suv cuatro puertas.",

    image: "./assets/241438new.avif",

    price: 24000,

    rate: 4.2,

    title: "2015 Dodge Journey",
  },
  {
    id: 7,

    category: "Carros",

    description: "Suv cuatro puertas.",

    image: "./assets/23217679672_dfc38f5fd9_b.jpg",

    price: 21000,

    rate: 4.1,

    title: "2011 Skoda Fabia Scout",
  },
  {
    id: 8,

    category: "Carros",

    description: "Sedan dos puertas.",

    image:
      "./assets/2020_jaguar_f-type_convertible_p380-r-dynamic_fq_oem_1_1600.avif",

    price: 180000,

    rate: 4.9,

    title: "2020 Jaguar F-Type R",
  },

  {
    id: 9,

    category: "Carros",

    description: "Suv cuatro puertas.",

    image: "./assets/BMW-X6.jpg",

    price: 45000,

    rate: 4.6,

    title: "2019 BMW X6 G06",
  },
];


const renderProductos = (arrayProductos) => {
    let containerProductos = document.getElementById("productos-container");
    containerProductos.innerHTML = "";

   arrayProductos.forEach((producto) => {
    let productoCard = document.createElement("div");
    productoCard.className = "producto card bg-warning";
    productoCard.innerHTML = `<img class="img-fluid img-fluid-custom" src=${producto.image} />
    <h3>${producto.title}</h3>
    <p>${producto.description}</p>
    <p class="price">$${producto.price}</p>
    <button class="btn btn-dark" onclick="agregarAlCarrito(${producto.id})">
    Agregar al Carrito</button>
    `;
    containerProductos.appendChild(productoCard)
   });


};
renderProductos(productos);

const agregarAlCarrito = (id) => {
    let producto = productos.find((elemento) => elemento.id)
    carrito.push(producto);
}