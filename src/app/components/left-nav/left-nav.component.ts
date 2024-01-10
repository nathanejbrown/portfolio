import { Component } from '@angular/core';
import { Route } from '../../models/routes.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent {
  routes: Route[] = [
    {
      displayName: 'About me',
      url: '/'
    },
    {
      displayName: 'Resume',
      url: '/'
    },
    {
      displayName: 'GitHub',
      url: '/'
    }
  ]
}
