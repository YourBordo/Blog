import {Component, Input} from "@angular/core";
import {Article} from "../../../models/article";
import {ArticleService} from "../../../services/article.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'article-redaction',
  templateUrl: './article-redaction.component.html',
  styleUrls: ['./article-redaction.component.css']
})

export class ArticleRedactionComponent {
  @Input() article: Article;
  @Input() currentUserId: number;

  public showRedact: boolean = false;
  public currentArticleId: number;
  public currentDateTime: string;
  myDate = new Date();

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe) {
    this.currentArticleId = activatedRoute.snapshot.params['id'];
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');

  }


  deleteArticle(): void {
    if (this.currentUserId == this.article.user.id) {
      this.articleService.deleteArticle(this.currentArticleId).subscribe();
    }

    this.articleService.getArticle(this.currentArticleId).subscribe(article1 => {
      this.article = article1;
      this.router.navigate(['profile/' + this.currentUserId]).then(r => {
      });
    });
  }

  updateArticle(): void {
    if (this.currentUserId == this.article.user.id) {
      this.article.updatedAt = this.currentDateTime;
      this.articleService.updateArticle(this.article).subscribe(responseArticle => {
        this.article = responseArticle;
        this.router.navigate(['article/' + this.article.id]).then(r => {
        });
      });
    }

    this.showRedact = !this.showRedact;

  }

  onClick(): void {
    this.showRedact = !this.showRedact;
  }
}
