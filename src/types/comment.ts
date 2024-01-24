import { IUser } from './user';

export interface IComment {
    id?: string;
    comment: string;
    userId: string;
    blogId: string;
    createdAt?: Date;
    updatedAt?: Date;
    user?: IUser;
}
