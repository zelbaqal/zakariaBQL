import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColDef, ColumnApi, GridApi, ICellRendererParams } from 'ag-grid-community';
import { LanguageService } from 'src/app/services/language/language.service';
import { EditBtnComponents } from './edit-btns.component';
import { ImgComponent } from './img-component';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  private gridApi: GridApi;

  columnDefs: ColDef[] = [
    { 
      headerValueGetter: this.localizeHeader.bind(this),
      field: 'logo',
      width : 100,
      cellRenderer: ImgComponent
     },
     { 
      headerValueGetter: this.localizeHeader.bind(this),
      field: 'name',
      width : 120
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


rowData = [
    {  name: 'Celica' },
    {  name: 'Mondeo'},
    {  name: 'Boxter'}
];

  constructor(private translateService : TranslateService) {
    this.translateService.onLangChange.subscribe(() => {
      this.gridApi.refreshHeader();
    })
   }

  ngOnInit(): void {
  }

  public onGridReady(parameters: any): void {
    this.gridApi = parameters.api;
  }

  public localizeHeader(parameters:any): string {
    let headerIdentifier = parameters.colDef.field;
    return this.translateService.instant("AGGRID."+headerIdentifier);
  }

}
