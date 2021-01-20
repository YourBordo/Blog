import {User} from './user';
import {Article} from './article';

export class Comment {
  id: number;
  message: string;
  createdAt: string;
  user: User = new User();
  article: Article = new Article();

  constructor(id?: number, message?: string, createdAt?: string, user?: User, article?: Article) {
    this.id = id;
    this.message = message;
    this.createdAt = createdAt;
    this.user = user;
    this.article = article;
  }
}
