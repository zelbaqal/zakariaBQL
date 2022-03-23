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
import { TokenStorageService } from 'src/app/services/token-storage/tokenStorage.service';
import { PublicResourcesService } from 'src/app/services/public-resources/public-resources.srvice';


@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  subscriptions:Subscription[] = [];
  isAdmin:boolean;
  user : UserHomeInfo;
  defaultLang:string;
 

  constructor(private languageService : LanguageService,
              private outputservice : OutPutService,
              private modalService: NgbModal,
              private userService: UserService,
              private publicService : PublicResourcesService,
              private tokenStorage : TokenStorageService) {
    
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
    this.publicService.getGlobalInfoUser().subscribe(user => {
      this.user = user
    });
    const index = this.tokenStorage.getUser().roles.indexOf("ROLE_ADMIN");
     this.isAdmin = index != -1 ? true : false;
  }


  openInfoModal() {
    const config: NgbModalOptions = { size : 'xl',}; 
    this.outputservice.modalRef = this.modalService.open(InfoModalComponent, config);
    this.outputservice.modalRef.componentInstance.user = this.user;  
    this.outputservice.submitEvent.subscribe(user => {
       this.user = user;
       this.outputservice.closeModal(); 
    });
  }

  downloadMyCV(){
    const fileName = "CV-"+ this.languageService.userLanguage.toUpperCase();
    this.publicService.getCvFile(this.user.userId).subscribe(blob => saveAs(blob, fileName));
  }
  
}


