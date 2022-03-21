import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { ConstantVariables } from "src/app/services/ConstantVariables";

@Component({
    selector: 'img-component',
    template: `<img width='30px' [src]="imgUrl" class='rounded-circle' [alt]="imgUrl">`,
  })
  export class ImgComponent implements ICellRendererAngularComp {
  
    imgUrl:string;
     
    constructor() { }
    refresh(params: ICellRendererParams): boolean {
        this.imgUrl = `${ConstantVariables.DOMAIN}/api/colaborators/${params.value}`
        return true;
    }
    agInit(params: ICellRendererParams): void {
      this.imgUrl = `${ConstantVariables.DOMAIN}/api/colaborators/${params.value}`
    }
  }