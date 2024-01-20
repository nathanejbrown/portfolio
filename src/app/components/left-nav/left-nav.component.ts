import { Component } from '@angular/core';
import { Route } from '../../models/routes.model';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  routes: Route[] = [
    {
      displayName: 'About me',
      url: '/about'
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
      this.router.navigate([route.url])
    }
  }
}
