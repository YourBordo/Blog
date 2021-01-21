import {Comment} from "./comment";
import {Article} from "./article";

export class User {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _password: string;
  private _email: string;
  private _createdAt: string;
  private _comments: Comment[];
  private _articles: Article[];

  set id(value: number) {
    this._id = value;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  set password(value: string) {
    this._password = value;
  }

  set email(value: string) {
    this._email = value;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }

  set articles(value: Article[]) {
    this._articles = value;
  }

  constructor(id?: number, firstName?: string, lastName?: string, password?: string, email?: string,
              createdAt?: string, comments?: Comment[], articles?: Article[]) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._password = password;
    this._email = email;
    this._createdAt = createdAt;
    this._articles = articles;
    this._comments = comments
  }
}
