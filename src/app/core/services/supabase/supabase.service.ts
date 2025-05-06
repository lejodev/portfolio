import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getPosts() {
    return this.supabase
      .from('posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
  }

  getPostBySlug(slug: string) {
    return this.supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();
  }
}
