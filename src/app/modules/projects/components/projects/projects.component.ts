import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: 'Project Management Dashboard',
      description: 'A full-stack application for managing projects and tasks with real-time updates.',
      image: 'assets/images/projects/project-1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: 'https://project-demo.com',
      githubUrl: 'https://github.com/yourusername/project-1',
      featured: true
    },
    // Add more projects here
  ];

  constructor() { }

  ngOnInit(): void {
    // You can fetch projects from a service here
  }
}
