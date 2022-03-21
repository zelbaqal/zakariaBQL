import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'img-component',
    template: `<button class="btn"><i class="bi bi-pencil-square text-success"></i></button> 
                <button class="btn"><i class="bi bi-trash3-fill text-danger"></i></button> `,
  })
  export class EditBtnComponents implements ICellRendererAngularComp {
  
     
    constructor() { }
    refresh(params: ICellRendererParams): boolean {
        return true;
    }
    agInit(params: ICellRendererParams): void {
      
    }
  }