import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailHttpService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  sendEmail(email: Email) {
    let url = this.baseUrl + 'send-email';

    return this.http.post<any>(url, email).pipe(
      map(res => {
        console.log('res', res)
      })
    )
  }
}
