import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  cvUrl: any
  constructor(private profileService:ProfileService, private http: HttpClient) { }

  ngOnInit() {

    this.cvUrl =  this.profileService.resumeurl
  }
}
