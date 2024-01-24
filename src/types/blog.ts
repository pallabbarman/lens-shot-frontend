import { ICategory } from './category';
import { IComment } from './comment';

export interface IBlog {
    id?: string;
    img: string;
    title: string;
    content: string;
    categoryId?: string;
    createdAt?: string;
    updatedAt?: string;
    category: ICategory;
    comments: IComment[];
}
