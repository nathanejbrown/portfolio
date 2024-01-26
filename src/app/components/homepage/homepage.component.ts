import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, MatIconModule, FontAwesomeModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  instagram = faInstagram;
  linkedin = faLinkedin;
  github = faGithub;

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(res => res.matches)
  )

  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
      .pipe(
        map(res => res.matches)
      )
}
