import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  newPost:Post
  title=""
  content=""


  constructor(private postService :PostService,
    private router:Router){}

  ngOnInit(): void {
    
  }

  onAddNewPost(){
    this.newPost = new Post(
      this.title,
      this.content
    )
      this.postService.addNewPost(this.newPost)
      this.router.navigate(['/'])
      console.log(this.newPost);

  }
}
