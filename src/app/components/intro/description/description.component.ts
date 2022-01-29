import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from 'src/app/services/language/language.service';
import { InfoModalComponent } from '../../modals/info-modal/info-modal.component';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  isAdmin:boolean = true;
  closeResult = '';
 

  constructor(private languageService : LanguageService,
              private modalService: NgbModal) {
     
  }

  ngOnInit(): void {
   
  }

  open() {
    const config: NgbModalOptions = { size : 'lg' };
     this.modalService.open(InfoModalComponent, config)
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

 

}
