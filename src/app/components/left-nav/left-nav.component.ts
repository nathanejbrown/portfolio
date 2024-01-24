import { Component } from '@angular/core';
import { Route } from '../../models/routes.model';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule, MatSidenavModule, MatIconModule],
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  opened: boolean = false;

  routes: Route[] = [
    {
      displayName: 'About me',
      url: '/about'
    },
    {
      displayName: 'Resume',
      url: 'src/assets/files/resume.pdf',
      external: true
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

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

  navigateToRoute(route: Route): void {
    if (route.external) {
      window.open(route.url, '_blank')
    } else {
      this.router.navigate([route.url])
    }
    this.opened = false;
  }
}
