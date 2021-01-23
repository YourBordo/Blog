import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../models/article";
import {Tag} from "../../../models/tag";
import {DatePipe} from "@angular/common";
import {ArticleStatus} from "../../../models/enums/article-status";
import {User} from "../../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit {
  public currentUserId: number = 1;
  public article: Article = new Article();
  public currentDateTime: string;
  public tagName: string;
  public status: ArticleStatus;


  myDate = new Date();


  constructor(private articleService: ArticleService,
              private datePipe: DatePipe,
              private router: Router,) {
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');

  }

  ngOnInit(): void {
    this.status = ArticleStatus.PUBLIC;

  }

  addArticle(): void {
    if (this.currentUserId) {

      this.article.user = new User();
      this.article.user.id = this.currentUserId;
      this.article.createdAt = this.currentDateTime;
      this.article.updatedAt = this.currentDateTime;

      let currentArticle: Article = new Article(undefined, this.article.title,
        this.article.articleText, this.article.createdAt, this.article.updatedAt,
        this.status, this.article.tags,
        undefined, this.article.user);

      this.articleService.saveArticle(currentArticle).subscribe(responseArticle => {
        this.router.navigate(['article/' + responseArticle.id]).then(r => {
        });
      })
    }
  }

  addTag(): void {
    let tag: Tag = new Tag();
    tag.tagName = this.tagName;
    if (!this.article.tags) {
      this.article.tags = [];
    }
    this.article.tags.push(tag);
  }

  deleteTag(tagToDelete: Tag): void {
    if (this.article.tags) {
      this.article.tags.forEach(tag => {
        if (tag == tagToDelete) {
          let pos: number = this.article.tags.indexOf(tag);
          this.article.tags.splice(pos, 1);
        }
      })
    }
  }

  setArticleStatusPublic(): void {
    this.status = ArticleStatus.PUBLIC;
  }

  setArticleStatusDraft(): void {
    this.status = ArticleStatus.DRAFT;
  }

}
