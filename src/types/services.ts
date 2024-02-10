import { ICategory } from './category';

export interface IService {
    id?: string;
    title: string;
    description: string;
    photo: string[];
    price: string;
    categoryId: string;
    createdAt?: Date;
    updatedAt?: Date;
    category?: ICategory;
}
