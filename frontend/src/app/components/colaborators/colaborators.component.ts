import { Component, OnInit } from '@angular/core';
import { ExtentionRemover } from 'src/app/pipes/extention-remover';

@Component({
  selector: 'colaborators',
  templateUrl: './colaborators.component.html',
  styleUrls: ['./colaborators.component.css']
})
export class ColaboratorsComponent implements OnInit {

  colaborators = ['oracle.png','git.png','java.png','css.png','javascript.png','jquery.png','angular.png','bootstrap.png','spring.png','mysql.png']
                  

  constructor() { }

  ngOnInit(): void {
    
  }

}
