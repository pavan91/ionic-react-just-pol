import { Product } from "./product";

export type Order = {
    orderDate: Date;
    products: Product[];
    state: number;
};