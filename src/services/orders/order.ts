import { Product } from "./product";

export type Order = {
    id: string;
    orderDate: Date;
    products: Product[];
    state: number;
};