import { Component } from '@angular/core';
import { Route } from '../../models/routes.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
      url: '/asdf'
    },
    {
      displayName: 'GitHub',
      url: 'https://www.github.com/nathanejbrown',
      external: true
    },
    {
      displayName: 'Contact',
      url: '/contact'
    }
  ]

  constructor(private router: Router) {}

  navigateToRoute(route: Route): void {
    if (route.external) {
      window.open(route.url, '_blank')
    } else {
      console.log('here?')
      this.router.navigate([route.url])
    }
  }
}
