import {Comment} from "./comment";
import {Article} from "./article";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  createdAt: string;
  comments: Comment[];
  articles: Article[];

  constructor(id?: number, firstName?: string, lastName?: string, password?: string, email?: string,
              createdAt?: string, comments?: Comment[], articles?: Article[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.createdAt = createdAt;
    this.articles = articles;
    this.comments = comments
  }
}
