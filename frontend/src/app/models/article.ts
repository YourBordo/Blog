import {ArticleStatus} from './enums/article-status';
import {User} from './user';
import {Tag} from "./tag";
import {Comment} from "./comment";
export class Article {
  private _id: number;
  private _title: string;
  private _articleText: string;
  private _createdAt: string;
  private _updatedAt: string;
  private _status: ArticleStatus;
  private _tags: Tag[];
  private _comments: Comment[];
  private _user: User = new User();

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get articleText(): string {
    return this._articleText;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  get status(): ArticleStatus {
    return this._status;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  get user(): User {
    return this._user;
  }

  set id(value: number) {
    this._id = value;
  }

  set title(value: string) {
    this._title = value;
  }

  set articleText(value: string) {
    this._articleText = value;
  }

  set createdAt(value: string) {
    this._createdAt = value;
  }

  set updatedAt(value: string) {
    this._updatedAt = value;
  }

  set status(value: ArticleStatus) {
    this._status = value;
  }

  set tags(value: Tag[]) {
    this._tags = value;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }

  set user(value: User) {
    this._user = value;
  }

  constructor(id?: number, title?: string, text?: string,
              createdAt?: string, updatedAt?: string, status?: ArticleStatus,
              tags?: Tag[], comments?: Comment[], user?: User) {
    this._id = id;
    this._title = title;
    this._articleText = text;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._status = status;
    this._tags = tags;
    this._comments = comments;
    this._user = user;
  }
}
