import { Component, Input, Self, Optional } from '@angular/core';
import { NgControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BreakpointsService } from 'app/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-large-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './large-text.component.html',
  styleUrls: ['./large-text.component.scss']
})
export class LargeTextComponent {
  @Input() placeholder: string = '';

  value: string = '';

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor(@Self() @Optional() public control: NgControl, public breakpointsService: BreakpointsService) {
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
