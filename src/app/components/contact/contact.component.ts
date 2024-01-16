import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../core/input-field/input-field.component';
import { LargeTextComponent } from '../../core/large-text/large-text.component';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, LargeTextComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      subject: new FormControl(''),
      message: new FormControl('', {
        validators: [Validators.required]
      })
    })

    this.contactForm.valueChanges.subscribe(changes => {
      console.log('changes', changes)
    })
  }
}
