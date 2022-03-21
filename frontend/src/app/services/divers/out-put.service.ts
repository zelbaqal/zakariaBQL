import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserHomeInfo } from 'src/app/models/userHomeInfo.model';

@Injectable({
  providedIn: 'root'
})
export class OutPutService {

  @Output() submitEvent = new EventEmitter<UserHomeInfo>();
  modalRef : NgbModalRef;

  constructor() { }

  closeModal(){
    if(this.modalRef){
        this.modalRef.close();
    }
  }

  
}
