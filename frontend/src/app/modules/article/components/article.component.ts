import {Component, OnDestroy, OnInit} from "@angular/core";
import {Article} from "../../../models/article";
import {ArticleService} from "../../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Comment} from "../../../models/comment";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{

  public  CURRENT_USER_ID: number = 1;

  public article: Article;
  public comments: Comment[];
  public currentArticleId: number;

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.currentArticleId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.articleService.getArticle(this.currentArticleId).subscribe(article1 =>{
      this.article = article1;
      this.comments = article1.comments;
    });

    this.userService.getUserByArticleId(this.currentArticleId).subscribe(user =>{
      if(user) {
        this.article.user = user;
      }
    })

  }
}
