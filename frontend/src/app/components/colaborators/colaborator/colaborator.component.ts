import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ExtentionRemover } from 'src/app/pipes/extention-remover';
import { ConstantVariables } from 'src/app/services/ConstantVariables';



@Component({
  selector: 'colaborator-logo',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.css']
})
export class ColaboratorComponent implements OnInit{

  
  @Input() icon : any;
  url : string;
  filename : string;
  extentionRemover : ExtentionRemover = new ExtentionRemover();

  constructor() { 

  }

  ngOnInit(): void {
    //this.filename = this.extentionRemover.transform(this.icon);
    this.filename = this.icon.tooltip;
    this.url = `${ConstantVariables.DOMAIN}/api/colaborators/${this.icon.imageName}`;
  }

 

  

}
