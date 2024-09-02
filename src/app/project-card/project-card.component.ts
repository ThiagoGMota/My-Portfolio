import { Component, Input } from '@angular/core';
import { Project } from '../modelos/project.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input()
  project!: Project;

}
