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
  mode=""
  postIndex=0;

  constructor(private postService :PostService,
    private router:Router,
    private ActiveRoute:ActivatedRoute,
    private fb:FormBuilder){}

  ngOnInit(): void {
    this.ActiveRoute.paramMap.subscribe(param =>{
      if(param.has('postIndex')){
        this.mode = "edit"
        this.postIndex = +param.get('postIndex')!
        const fpost = this.postService.findPostByIndex(this.postIndex)
        this.f.post.controls.titleInput.setValue(fpost.title)
        this.f.post.controls.contentInput.setValue(fpost.content)
      }
      else{
        this.mode = "create"
      }
     
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


  onEditPost(newPost:any){
    this.newPost = new Post(
      newPost.titleInput.value,
      newPost.contentInput.value
    )
    this.postService.updatePost(this.postIndex,this.newPost)
    this.router.navigate(['/'])
  }
}
