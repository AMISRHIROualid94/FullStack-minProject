import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {


posts:Post[] = [
  {
    title:"postTest",
    content:"Content for post test"
  },
  {
    title:"postTest2",
    content:"Content for post test2"
  }
]

  constructor() { 
    
  }


  getAllPosts(){
    return this.posts
  }

  findPostByIndex(index:number){
    return this.posts[index]
  }

  updatePost(index:number,newPost:Post){
      this.posts[index] = newPost
  }


  deletePost(index:number){
    this.posts.splice(index,1)
  }

  addNewPost(post:Post){
    this.posts.push(post)
  }
}
