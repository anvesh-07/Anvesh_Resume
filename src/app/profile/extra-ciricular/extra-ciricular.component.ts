import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-extra-ciricular',
  templateUrl: './extra-ciricular.component.html',
  styleUrls: ['./extra-ciricular.component.scss']
})
export class ExtraCiricularComponent {
  extras: any
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.extras = this.profileService.extraCircular()
  }
  toggleDescription(extra: any) {
    Swal.fire({
      title: extra.title,
      text: extra.description,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
}
