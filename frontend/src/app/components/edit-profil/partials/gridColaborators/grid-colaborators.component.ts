import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ColDef, GridApi } from "ag-grid-community";
import { PublicResourcesService } from "src/app/services/public-resources/public-resources.srvice";
import { ImgComponent } from "../../img-component";
import { EditBtnComponents } from "./edit-btns.component";


@Component({
    selector: 'grid-colaborators',
    template: `<div class="card mt-2 mb-xl-0 p-0">
                  <div class="my-div-height ag-theme-alpine">
                      <!-- Grid icons -->
                          <ag-grid-angular
                              style="width: 100%; height: 100%;"
                              [rowData]="rowData"
                              [columnDefs]="columnDefs"
                              [defaultColDef]="defaultColDef"
                              (gridReady)="onGridReady($event)">
                          </ag-grid-angular>
                  </div>
                  <div class="card-footer ">
                  <button class="btn btn-secondary p-0 py-1 w-25 btn-sm float-right" type="button"><i class="bi bi-plus"></i></button>
                  </div>
              </div>`,
    styleUrls : ['./grid-colaborators.component.css']
  })
  export class GridColaborators implements OnInit {
  
     
    private gridApi: GridApi;

  columnDefs: ColDef[] = [
    { 
      headerValueGetter: this.localizeHeader.bind(this),
      field: 'imageName',
      width : 100,
      cellRenderer: ImgComponent,

     },
     { 
      headerValueGetter: this.localizeHeader.bind(this),
      field: 'tooltip',
      width : 120,
     },
     { 
      headerValueGetter: this.localizeHeader.bind(this),
      field: 'action',
      width : 120,
      headerClass :"acion-style",
      cellRenderer : EditBtnComponents
     }]

     public defaultColDef: ColDef = {
      resizable: false,
    };


rowData = [];

  constructor(private translateService : TranslateService, private publicService : PublicResourcesService) {
    //To refactor
    this.translateService.onLangChange.subscribe(() => {
      this.gridApi.refreshHeader();
    })


   }

  ngOnInit(): void {
    this.publicService.getColaboratorsImages().subscribe(data => {
      this.rowData = data
    })
  }

  public onGridReady(parameters: any): void {
    this.gridApi = parameters.api;
  }

  public localizeHeader(parameters:any): string {
    let headerIdentifier = parameters.colDef.field;
    return this.translateService.instant("AGGRID."+headerIdentifier);
  }
        
}
   
