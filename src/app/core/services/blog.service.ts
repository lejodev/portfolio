import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../interfaces/blog-post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly API_URL = 'assets/data/blog-posts.json'; // For static data

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.API_URL);
  }

  getBlogPost(slug: string): Observable<BlogPost> {
    return new Observable(observer => {
      this.getBlogPosts().subscribe(posts => {
        const post = posts.find(p => p.slug === slug);
        if (post) {
          observer.next(post);
        }
        observer.complete();
      });
    });
  }
}