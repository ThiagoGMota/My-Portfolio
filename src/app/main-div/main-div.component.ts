  import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../modelos/project.model';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
@Component({
  selector: 'app-main-div',
  standalone: true,
  imports: [
    ProjectCardComponent,
    CommonModule],
  templateUrl: './main-div.component.html',
  styleUrl: './main-div.component.scss'
})
export class MainDivComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    console.log('component works');
  }

}
