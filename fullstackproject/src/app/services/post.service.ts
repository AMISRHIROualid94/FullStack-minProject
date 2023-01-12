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
  }
]

  constructor() { }
}
