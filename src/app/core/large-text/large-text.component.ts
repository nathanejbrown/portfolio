import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-text',
  standalone: true,
  imports: [],
  templateUrl: './large-text.component.html',
  styleUrls: ['./large-text.component.scss']
})
export class LargeTextComponent {
  @Input() placeholder: string = '';

}
