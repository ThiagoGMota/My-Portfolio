import { Component, Input } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(){}
  @Input()
  nome:string = 'Thiago G. Mota'
  @Input()
  phrase = "Front-End Developer"
}
