import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {User} from "../../../models/user";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {


  @Input() articleId: number;
  @Input() currentUserId: number;
  comments: Comment[];
  text: string;
  currentDateTime: string;
  myDate = new Date();
  constructor(private userService: UserService,
              private commentService: CommentService,
              private httpClient: HttpClient,
              private datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getCommentsByArticleId(this.articleId).subscribe(comments => {
      this.comments = comments;
      this.getUsersFromComments();
    })

  }

  getUsersFromComments(): void {
    if (this.comments) {
      this.comments.forEach((comment) => {
          this.userService.getUserByCommentId(comment.id).subscribe(user => {
            comment.user = user;
          })
        }
      )
    }
  }

  deleteComment(commentToDelete: Comment): void {
    if (this.currentUserId == commentToDelete.user.id) {
      this.commentService.deleteComment(commentToDelete.id).subscribe();
      this.getComments();
    }
  }

  addComment(): void {
    if (this.currentUserId) {
      if (this.text) {
        this.httpClient.post("/api/comment/", {
          message: this.text,
          createdAt: this.currentDateTime,
          user:
            {
              id: this.currentUserId
            },
          article:
            {
              id: this.articleId
            }

        }).subscribe(
          res => {
          },
          err => {
            console.log('Error at addComment()');
          });
        this.getComments();

      }
    }
  }

}
