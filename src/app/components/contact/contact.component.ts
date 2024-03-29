import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldComponent } from '../../core/input-field/input-field.component';
import { LargeTextComponent } from '../../core/large-text/large-text.component';
import { ButtonComponent } from '../../core/button/button.component';
import { SendEmailHttpService } from 'app/services/send-email/send-email.http.service';
import { CommonModule } from '@angular/common';
import { BreakpointsService } from 'app/services/breakpoints/breakpoints.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, LargeTextComponent, ButtonComponent, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [SendEmailHttpService]
})
export class ContactComponent {
  contactForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;
  buttonText: string = 'Submit';

  constructor(private sendEmailHttpService: SendEmailHttpService, public breakpointsService: BreakpointsService) {
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
    if (this.contactForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      let newEmail = {
        name: this.contactForm.controls['name'].value,
        email: this.contactForm.controls['email'].value,
        subject: this.contactForm.controls['subject'].value,
        message: this.contactForm.controls['message'].value
      }
  
      this.sendEmailHttpService.sendEmail(newEmail).subscribe(res => {
        this.contactForm.reset();
        this.loading = false;
        this.buttonText = 'Sent!';
        setTimeout(() => {
          this.buttonText = 'Submit';
        }, 3000);
      })
    } else {
      this.errorMessage = 'Name, email, and message fields are required.';
    }
  }
}
