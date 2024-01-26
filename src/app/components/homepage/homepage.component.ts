import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { BreakpointsService } from 'app/services/breakpoints/breakpoints.service';

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

  constructor(public breakpointsService: BreakpointsService) {}
}
