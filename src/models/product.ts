import { ReactNode, FC } from "react";

export interface product {
  title: string;
  icon: string;
  backgroundImg: string;
  description: string;
  showMore: string;
  aditionals?: JSX.Element;
}
