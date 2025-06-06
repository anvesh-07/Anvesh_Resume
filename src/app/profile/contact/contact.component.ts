import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private http: HttpClient) {}
  model: any = {};
   copyPhoneNumber(): void {
    const phoneNumber = '+91 7799233191';
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        alert('Phone number copied!');
      })
      .catch((error) => {
        console.error('Failed to copy phone number: ', error);
      });
  }
  // copyPassionId(): void {
  //   const passionId = 'AR926';
  //   navigator.clipboard.writeText(passionId)
  //     .then(() => {
  //       alert('passion-Id copied!');
  //     })
  //     .catch((error) => {
  //       console.error('Failed to copy passion-Id: ', error);
  //     });
  // }
  
  sendEmail(): void {
    const email = 'settipallianveshreddy2002@gmail.com';
    window.location.href = 'mailto:' + email;
  }
  
  // sendmail(): void {
  //   const email = 'settipallianveshreddy2002@gmail.com';
  //   window.location.href = 'mailto:' + email;
  // }
  // constructor(private router: Router) {}
  redirectToContactPage() {
    window.location.href = 'https://www.justpic.in/contact/AR926';
  }
}
