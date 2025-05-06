import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/core/interfaces/blog-post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable Angular Applications',
      slug: 'building-scalable-angular-applications',
      excerpt: 'Learn the best practices for structuring large-scale Angular applications.',
      content: '...',
      image: 'assets/images/blog/post-1.jpg',
      date: new Date('2024-05-01'),
      category: 'Angular',
      tags: ['Angular', 'Architecture', 'Best Practices']
    },
    // Add more blog posts here
  ];

  constructor() { }

  ngOnInit(): void {
    // You can fetch blog posts from a service here
  }
}
