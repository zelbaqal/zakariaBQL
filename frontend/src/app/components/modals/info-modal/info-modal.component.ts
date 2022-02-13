import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { OutPutService } from 'src/app/services/divers/out-put.service';
import { UserService } from 'src/app/services/userServices/user.service';
import { InputConfig, InputType } from '../input-modal/input-modal.component';


@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit, OnDestroy{

  inputsConfig : InputConfig[] = [
    {
      inputTitle : 'salutation', 
      inputType : InputType.textInput,
      inputPlaceHolder:{
        fr:'Insérer votre salutation en Français',
        en:'Write your salutation in English'
      }
    },
    {
      inputTitle : 'presentation', 
      inputType : InputType.textInput,
      inputPlaceHolder:{
        fr:'Insérer votre présentation en Français',
        en:'Write your presentation in English'
      }
    },
    {
      inputTitle : 'jobDescription', 
      inputType : InputType.textAriaInput,
      inputPlaceHolder:{
        fr:'Insérer votre fonction en Français',
        en:'Write your job in English'
      }
    }
]

  subscriptions : Subscription[] = []
  @Input() public userId:number;
  user : User;
  myForm: FormGroup;
  public filesFR: NgxFileDropEntry[] = [];
  public filesEN: NgxFileDropEntry[] = [];
  cvFileFrensh : File = new File([],"");
  cvFileEnglish : File = new File([],"");

  constructor(private outputservice : OutPutService,
              private userService : UserService) {
                this.user = new User();
                this.myForm  = new FormGroup({
                      userId : new FormControl(null),
                      salutation : new FormControl(null,Validators.required),
                      presentation : new FormControl(null,Validators.required),
                      jobDescription : new FormControl(null,Validators.required),
                      resumeNameFr : new FormControl(null),
                      resumeNameEn : new FormControl(null)
                    });  
              }


  ngOnInit(): void {
    this.subscriptions.push(
          this.userService.getGlobalInfoUser(this.userId).subscribe(user =>{
              this.myForm.controls.userId.setValue(user.userId);
              this.myForm.controls.salutation.setValue(user.salutation);
              this.myForm.controls.presentation.setValue(user.presentation);
              this.myForm.controls.jobDescription.setValue(user.jobDescription);
              this.myForm.controls.resumeNameFr.setValue(user.resumeNameFr);
              this.myForm.controls.resumeNameEn.setValue(user.resumeNameEn);
              this.user = user;
    }));        
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    
    clearResumeField(input :string){
      if(input == 'fr'){
        this.user.resumeNameFr = "";
      }
      if(input == 'en'){
        this.user.resumeNameEn = ""
      }
    }
 
  
  
  

      
    fileChange(file: Map<string,File>){
      file.forEach((value:File, key:string)=>{
        if(key === 'fr'){
          this.cvFileFrensh = value;
          this.user.resumeNameFr = value.name;
        }else if(key === 'en'){
          this.cvFileEnglish = value;
          this.user.resumeNameEn = value.name;
        }
      })
    }

  checkFilesValidity():boolean{
    return (this.myForm.valid && !!this.user.resumeNameFr && !!this.user.resumeNameEn);
  }
   

  closeCurrentModal(){
    this.outputservice.closeModal();
  }

  submitClicked(){
        const formData = new FormData();
        formData.append("userInfo", new Blob([JSON.stringify(this.myForm.value)],{type:"application/json"})); 
        formData.append('cvFileFR', this.cvFileFrensh);
        formData.append('cvFileEN', this.cvFileEnglish);
        //TO DO send request to server
        this.userService.updateUserInformation(formData).subscribe(data => {
          this.outputservice.submitEvent.emit(data);
        }) 
}

 



}


