import { ICategory } from './category';
import { Price_PLAN } from './price';

export interface IService {
    id?: string;
    title: string;
    description: string;
    photo: string;
    price: Price_PLAN;
    categoryId: string;
    createdAt?: Date;
    updatedAt?: Date;
    category?: ICategory;
}
