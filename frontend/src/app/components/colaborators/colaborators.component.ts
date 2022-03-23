import { Component, OnInit } from '@angular/core';
import { PublicResourcesService } from 'src/app/services/public-resources/public-resources.srvice';

@Component({
  selector: 'colaborators',
  templateUrl: './colaborators.component.html',
  styleUrls: ['./colaborators.component.css']
})
export class ColaboratorsComponent implements OnInit {

  colaborators = []
                  

  constructor(private publicService : PublicResourcesService) { }

  ngOnInit(): void {
    this.publicService.getColaboratorsImages().subscribe(colaborators => {
      this.colaborators = colaborators;
    })
  }

}
