import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  postIndex=0;

  constructor(private postService :PostService,
    private router:Router,
    private ActiveRoute:ActivatedRoute,
    private fb:FormBuilder){}

  ngOnInit(): void {

    this.ActiveRoute.paramMap.subscribe(param =>{
      this.postIndex = +param.get('postIndex')!
      console.log(this.postService.findPostByIndex(this.postIndex));
    })
    
    
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
