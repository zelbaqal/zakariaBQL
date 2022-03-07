import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'img-component',
    template: "<img width='30px' src='http://bootdey.com/img/Content/avatar/avatar1.png' class='rounded-circle' alt='Cinque Terre'>",
  })
  export class ImgComponent implements ICellRendererAngularComp {
  
     
    constructor() { }
    refresh(params: ICellRendererParams): boolean {
        return true;
    }
    agInit(params: ICellRendererParams): void {
      
    }
  }