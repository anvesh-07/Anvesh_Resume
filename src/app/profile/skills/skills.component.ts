import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  skill: any

  constructor(private profileService:ProfileService) { }

    ngOnInit() {

      this.skill =  this.profileService.skills()
    }

}
