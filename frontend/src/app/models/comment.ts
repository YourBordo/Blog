import {User} from "./user";
import {Article} from "./article";

export class Comment {
  private _id: number;
  private _message: string;
  private _createdAt: string;
  private _user: User = new User();
  private _article: Article = new Article();

  get id(): number {
    return this._id;
  }

  get message(): string {
    return this._message;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get user(): User {
    return this._user;
  }

  get article(): Article {
    return this._article;
  }

  set article(value: Article) {
    this._article = value;
  }

  constructor(id?: number, message?: string, createdAt?: string, user?: User) {
    this._id = id;
    this._message = message;
    this._createdAt = createdAt;
    this._user = user;

  }

  set id(value: number) {
    this._id = value;
  }

  set message(value: string) {
    this._message = value;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  set user(value: User) {
    this._user = value;
  }
}
