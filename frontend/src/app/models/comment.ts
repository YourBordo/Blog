import {User} from "./user";

export class Comment {
  id: number;
  message: string;
  createdAt: string;
  user: User = new User();

  constructor(id?: number, message?: string, createdAt?: string, user?: User) {
    this.id = id;
    this.message = message;
    this.createdAt = createdAt;
    this.user = user;

  }
}
