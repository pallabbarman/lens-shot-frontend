import { ICategory } from './category';

export interface IBlog {
    id?: string;
    img: string;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    category: ICategory;
}
