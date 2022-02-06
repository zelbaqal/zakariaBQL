import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OutPutService {

  @Output() submitEvent = new EventEmitter<User>();
  modalRef : NgbModalRef;

  constructor() { }

  closeModal(){
    if(this.modalRef){
        this.modalRef.close();
    }
  }

  
}
