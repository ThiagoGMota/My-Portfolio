import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainDivComponent } from './main-div/main-div.component';
import { HomeComponent } from './home/home.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContatoComponent } from './contato/contato.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { AlertaComponent } from "./alerta/alerta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    MainDivComponent,
    HomeComponent,
    AboutMeComponent,
    ServicesComponent,
    ProjectsComponent,
    AlertaComponent,
    LanguagesComponent,
    AlertaComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio-angular';
  constructor(){}
  nome:string = "Thiago G. Mota"
}
