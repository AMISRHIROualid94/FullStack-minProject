import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private router:Router,
    private fb:FormBuilder){}

  ngOnInit(): void {

  }

  fg = this.fb.group({
    post:this.fb.group({
      titleInput:['',[Validators.required,Validators.minLength(3)]],
      contentInput : ['',Validators.required]
    })

  })

  get f(){
    return this.fg.controls
  }


  onAddNewPost(post:any){
    this.newPost = new Post(
      post.titleInput.value,
      post.contentInput.value
    )
      this.postService.addNewPost(this.newPost)
      this.router.navigate(['/'])

  }
}
