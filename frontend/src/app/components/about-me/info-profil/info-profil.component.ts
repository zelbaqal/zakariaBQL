import { Component, Input, OnInit } from '@angular/core';
import { UserEditInfo } from '../../edit-profil/partials/accountDetails/account-details.component';

@Component({
  selector: 'info-profil',
  templateUrl: './info-profil.component.html',
  styleUrls: ['./info-profil.component.css']
})
export class InfoProfilComponent implements OnInit {

  @Input() user:UserEditInfo;
  @Input() title:string;

  constructor() { 
  }

  ngOnInit(): void {
  
  }

}
