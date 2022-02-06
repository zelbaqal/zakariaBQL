import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { OutPutService } from 'src/app/services/divers/out-put.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UserService } from 'src/app/services/userServices/user.service';
import { InfoModalComponent } from '../../modals/info-modal/info-modal.component';



@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  subscriptions:Subscription[] = [];
  isAdmin:boolean = true;
  user : User;
  defaultLang:string;
 

  constructor(private languageService : LanguageService,
              private outputservice : OutPutService,
              private modalService: NgbModal,
              private userService: UserService) {
    
                this.user = new User();
                this.defaultLang = this.languageService.userLanguage;

                 this.subscriptions.push(this.languageService.langChenged
                                        .pipe(
                                          distinctUntilChanged()
                                        )
                                        .subscribe(changedLang => {
                                          this.defaultLang = changedLang;
                                        }));
                
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    }); 
  }

  
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe(user => this.user = user);
  }


  openInfoModal() {
    
    const config: NgbModalOptions = { size : 'xl',};
    
    this.outputservice.modalRef = this.modalService.open(InfoModalComponent, config);
    this.outputservice.modalRef.componentInstance.userId = this.user.userId;
     
    this.outputservice.submitEvent.subscribe(user => {
       this.user = user;
       this.outputservice.closeModal(); 
    });

    
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
function first(): import("rxjs").OperatorFunction<string, unknown> {
  throw new Error('Function not implemented.');
}

