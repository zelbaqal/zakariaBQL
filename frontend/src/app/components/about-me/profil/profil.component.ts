import { Component, Input, OnInit } from '@angular/core';
import { ConstantVariables } from 'src/app/services/ConstantVariables';

@Component({
  selector: 'profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() fullname : string;
  @Input() function : string;
  @Input() city : any;
  @Input() country : any;
  @Input() imageName : any;


  constructor() { }

  ngOnInit(): void {
  
  }

}
