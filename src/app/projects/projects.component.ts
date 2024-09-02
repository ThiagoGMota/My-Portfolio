// src/app/projects/projects.component.ts
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../modelos/project.model'; // Certifique-se de que o caminho está correto
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      imageUrl: 'logo1.jpg',
      link: 'https://',
      linkGitHub: 'https://github.com/'
    },
    {
      id:2,
    title:"Chess Championship",
    description:"Landing page torneio de xadrez",
    imageUrl:"lpChessMac.png",
    link:"https://thiagogmota.github.io/Chess-Landing-Page/",
    linkGitHub:"https://github.com/ThiagoGMota/Chess-Landing-Page.git",
    },
    {
      id: 4,
      title: 'Este Portfólio',
      description: '',
      imageUrl: 'logo1.jpg',
      link: 'https://',
      linkGitHub: 'https://github.com/'
    },
  ];
}
