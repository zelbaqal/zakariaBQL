import { Component, OnInit } from '@angular/core';
import { ExtentionRemover } from 'src/app/pipes/extention-remover';
import { ColaboratorsService } from 'src/app/services/colaborators/colaborators.service';

@Component({
  selector: 'colaborators',
  templateUrl: './colaborators.component.html',
  styleUrls: ['./colaborators.component.css']
})
export class ColaboratorsComponent implements OnInit {

  colaborators = ['oracle.png','git.png','java.png','css.png','javascript.png','jquery.png','angular.png','bootstrap.png','spring.png','mysql.png']
                  

  constructor(private colaboratorService : ColaboratorsService) { }

  ngOnInit(): void {
    this.colaboratorService.getColaboratorsImages().subscribe(colaborators => {
      this.colaborators = colaborators;
    })
  }

}
