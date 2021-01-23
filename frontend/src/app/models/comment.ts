import {User} from "./user";
import {Article} from "./article";

export class Comment {
  public id: number;
  public message: string;
  public createdAt: string;
  public user: User = new User();
  public article: Article = new Article();


  constructor(id?: number, message?: string, createdAt?: string, user?: User) {
    this.id = id;
    this.message = message;
    this.createdAt = createdAt;
    this.user = user;

  }


}
