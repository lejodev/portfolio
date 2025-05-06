import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/core/services/supabase/supabase.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService
  ) { }

  post!: any;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.supabase.getPostBySlug(slug).then((post) => {
        console.log(post);
      });
    }
  }

}
