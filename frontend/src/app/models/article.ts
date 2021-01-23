import {ArticleStatus} from './enums/article-status';
import {User} from './user';
import {Tag} from "./tag";
import {Comment} from "./comment";
export class Article {
  public id: number;
  public title: string;
  public articleText: string;
  public createdAt: string;
  public updatedAt: string;
  public articleStatus: ArticleStatus;
  public tags: Tag[];
  public comments: Comment[];
  public user: User = new User();



  constructor(id?: number, title?: string, text?: string,
              createdAt?: string, updatedAt?: string, status?: ArticleStatus,
              tags?: Tag[], comments?: Comment[], user?: User) {
    this.id = id;
    this.title = title;
    this.articleText = text;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.articleStatus = status;
    this.tags = tags;
    this.comments = comments;
    this.user = user;
  }
}
