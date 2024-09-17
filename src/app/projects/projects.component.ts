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
      title: 'MyMoney',
      description: 'Gestor financeiro pessoal',
      imageUrl: 'myMoneyMac.png',
      link: 'https://my-moneymanager.vercel.app/',
      linkGitHub: 'https://github.com/ThiagoGMota/MyMoney'
    },
    {
      id:2,
    title:"Classroom Of the Elite",
    description:"Fan Site da light novel",
    imageUrl:"youjitsuMac.png",
    link:"https://youjitsu.vercel.app/",
    linkGitHub:"https://github.com/ThiagoGMota/Youjitsu-",
    },
    {
      id:3,
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
      imageUrl: 'portfolio-thiago-pc-screen.png',
      link: 'https://thiagomotadeveloper.vercel.app/',
      linkGitHub: 'https://github.com/ThiagoGMota/My-Portfolio'
    },
    /* {
      id:5,
      title:"Calc Anything",
      description:"Site Calc Enything",
      imageUrl:"#",
      link:"",
      linkGitHub:"",
    } */
  ];
}
