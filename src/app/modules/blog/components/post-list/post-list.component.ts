import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase/supabase.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  posts: any[] = [];

  constructor(private supabase: SupabaseService) { }

  ngOnInit(): void {
    this.supabase.getPosts().then(({ data, error }) => {
      if (data) this.posts = data
      else console.error(error)
    }
    )
  }

}
