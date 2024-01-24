import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-large-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './large-text.component.html',
  styleUrls: ['./large-text.component.scss']
})
export class LargeTextComponent {
  @Input() placeholder: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  value: string = '';

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(@Self() @Optional() public control: NgControl, private breakpointObserver: BreakpointObserver) {
    this.control.valueAccessor = this;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChange(target.value);
  }
}
