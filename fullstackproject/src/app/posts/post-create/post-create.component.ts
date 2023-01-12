import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  fg:FormGroup

  constructor(private postService :PostService,
    private router:Router,
    private fb:FormBuilder){}

  ngOnInit(): void {
    this.fg = this.fb.group({
      post:this.fb.group({
        titleInput:['',[Validators.required,Validators.minLength(3)]],
        contentInput : ['',Validators.required]
      })
   
    })

    
  }


  get f(){
    return this.fg.controls
  }


  onAddNewPost(post:any){
    this.newPost = new Post(
      post.controls.titleInput.value,
      post.controls.contentInput.value
    )
      this.postService.addNewPost(this.newPost)
      this.router.navigate(['/'])

  }
}
