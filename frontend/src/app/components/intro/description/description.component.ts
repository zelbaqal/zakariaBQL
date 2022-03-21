import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { UserHomeInfo } from 'src/app/models/userHomeInfo.model';
import { OutPutService } from 'src/app/services/divers/out-put.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { UserService } from 'src/app/services/userServices/user.service';
import { InfoModalComponent } from '../../modals/info-modal/info-modal.component';
import { saveAs } from 'file-saver';


@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  subscriptions:Subscription[] = [];
  isAdmin:boolean = true;
  user : UserHomeInfo;
  defaultLang:string;
 

  constructor(private languageService : LanguageService,
              private outputservice : OutPutService,
              private modalService: NgbModal,
              private userService: UserService) {
    
                this.user = new UserHomeInfo();
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
  }

  downloadMyCV(){
    const fileName = "CV-"+ this.languageService.userLanguage.toUpperCase();
    this.userService.getCvFile(this.user.userId).subscribe(blob => saveAs(blob, fileName));
  }
  
}


