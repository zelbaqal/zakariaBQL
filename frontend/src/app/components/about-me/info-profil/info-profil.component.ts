import { Component, Input, OnInit } from '@angular/core';
import { UserEditInfo } from '../../edit-profil/partials/accountDetails/account-details.component';

@Component({
  selector: 'info-profil',
  templateUrl: './info-profil.component.html',
  styleUrls: ['./info-profil.component.css']
})
export class InfoProfilComponent {

  @Input() value:any;
  @Input() title:string;
  @Input() displayIn:string = 'capital';

  constructor() { 
  }

 

}
