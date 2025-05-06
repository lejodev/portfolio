import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly API_URL = 'assets/data/projects.json'; // For static data

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.API_URL);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return new Observable(observer => {
      this.getProjects().subscribe(projects => {
        observer.next(projects.filter(p => p.featured));
        observer.complete();
      });
    });
  }
}