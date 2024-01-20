import { IUser } from './user';

export interface IFeedback {
    id?: string;
    feedback: string;
    userId: string;
    user?: IUser;
    createdAt: Date;
    updatedAt: Date;
}
