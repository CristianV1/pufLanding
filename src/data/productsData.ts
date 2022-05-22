import { ReactNode, ReactFragment } from "react";
import { product } from "../models/product";
import BigButton from "../components/BigButton/BigButton";
let products: product[] = [];
let textoSimulado = "Descripcion del producto este es un texto simulado";
let textoVerMas = "VER MAS";

products.push({
  title: "puffi RAIN",
  icon: "https://e7.pngegg.com/pngimages/296/21/png-clipart-adobe-illustrator-scape-umbrella-white-umbrella.png",
  backgroundImg:
    "https://media.istockphoto.com/photos/woman-with-umbrella-and-coffee-on-rainy-day-picture-id1178504731?k=20&m=1178504731&s=612x612&w=0&h=Iz2Ijku68eJ7cIX9j2gYyH42yYMjT5tPIta28mD8KXQ=",
  description: textoSimulado,
  showMore: textoVerMas,
});

products.push({
  title: "puffi PUFF",
  icon: "https://e7.pngegg.com/pngimages/707/427/png-clipart-bean-bag-chairs-chair-furniture-textile.png",
  backgroundImg:
    "https://img.freepik.com/free-photo/young-african-american-man-sitting-puff-isolated-white-background-covering-ears-with-hands_1187-202177.jpg",
  description: textoSimulado,
  showMore: textoVerMas,
});

products.push({
  title: "puffi CART",
  icon: "https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png",
  backgroundImg:
    "https://cdnimg.webstaurantstore.com/images/products/large/446885/1773960.jpg",
  description: textoSimulado,
  showMore: textoVerMas,
});

products.push({
  title: "puffi NAP",
  icon: "https://w7.pngwing.com/pngs/569/63/png-transparent-pillow-blanket-air-travel-neck-pillow-blue-furniture-textile-thumbnail.png",
  backgroundImg:
    "https://image.made-in-china.com/2f0j00bpyUKScDniqR/Lycra-Fabric-U-Shaped-Neck-Pillow-Music-Pillow-Car-Accessories-Sleeping-Use-Traveling-Protect-Cervical.jpg",
  description: textoSimulado,
  showMore: "MAS INFO",
});

export default products;
