import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../core/input-field/input-field.component';
import { LargeTextComponent } from '../../core/large-text/large-text.component';
import { ButtonComponent } from '../../core/button/button.component';
import { SendEmailHttpService } from 'app/services/send-email.http.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, LargeTextComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [SendEmailHttpService]
})
export class ContactComponent {
  contactForm: FormGroup;
  errorMessage: string = '';

  constructor(private sendEmailHttpService: SendEmailHttpService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      subject: new FormControl(''),
      message: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }

  sendEmail(): void {
    console.log('called?', this.contactForm)
    if (this.contactForm.valid) {
      this.errorMessage = '';
      let newEmail = {
        name: this.contactForm.controls['name'].value,
        email: this.contactForm.controls['email'].value,
        subject: this.contactForm.controls['subject'].value,
        message: this.contactForm.controls['message'].value
      }
  
      this.sendEmailHttpService.sendEmail(newEmail).subscribe(res => {
        console.log('res', res)
      })
    } else {
      this.errorMessage = 'Name, email, and message fields are required.';
    }
  }
}
