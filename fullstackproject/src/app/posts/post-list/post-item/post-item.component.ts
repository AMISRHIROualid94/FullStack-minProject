import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post:Post
  @Input() index: number

  constructor(private postService:PostService,
    private router:Router){}


  deletePost(index:number){
    this.postService.deletePost(index);
    this.router.navigate(['/'])
  }

}
