import React, { ReactNode } from "react";
import { product } from "../../../models/product";
import products from "../../../data/productsData";
import BigButton from "../../BigButton/BigButton";
import SimpleBox from "../../Boxes/SimpleBox/SimpleBox";
import DetailsBox from "../../Boxes/DetailsBox/DetailsBox";
import "./ProductsSection.scss";

/*
interface SimpleBox {
  img: string;
  darkBackground?: boolean;
  data?: object;
}

interface DetailBox {
  icon: string;
  title: string;
  description: string;
  showMore: string;
  arrow: string;
}
*/

interface Props {
  products: product[];
}

const ProductsSection: React.FC<Props> = ({ products }) => {
  let renderBoxes = [];

  function createBoxesToRender(): ReactNode {
    return products.map((product: product, index: number) =>
      index % 2 === 0 ? (
        <React.Fragment key={index}>
          <SimpleBox
            key={index}
            {...(index === 0 ? { data: <BigButton message="SHOP" /> } : {})}
            darkBackground
            img={product.backgroundImg}
          />
          <DetailsBox
            arrow="left"
            description={product.description}
            showMore={product.showMore}
            icon={product.icon}
            title={product.title}
          />
        </React.Fragment>
      ) : (
        <React.Fragment key={index}>
          <DetailsBox
            key={index}
            arrow="right"
            description={product.description}
            showMore={product.showMore}
            icon={product.icon}
            title={product.title}
          />
          <SimpleBox darkBackground img={product.backgroundImg} />
        </React.Fragment>
      )
    );
  }

  return (
    <div className="productsSection__container">{createBoxesToRender()}</div>
  );
};

export default ProductsSection;
