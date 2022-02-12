import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { User } from 'src/app/models/user.model';
import { OutPutService } from 'src/app/services/divers/out-put.service';
import { UserService } from 'src/app/services/userServices/user.service';
import { InputConfig, InputType } from '../input-modal/input-modal.component';


@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit{

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

  
  @Input() public user:User;
 
  myForm: FormGroup;
  public filesFR: NgxFileDropEntry[] = [];
  public filesEN: NgxFileDropEntry[] = [];
  cvFileFrensh : File = new File([],"");
  cvFileEnglish : File = new File([],"");

  constructor(private outputservice : OutPutService,
              private userService : UserService) {
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
      if(this.user){
        this.myForm.controls.userId.setValue(this.user.userId);
        this.myForm.controls.salutation.setValue(this.user.salutation);
        this.myForm.controls.presentation.setValue(this.user.presentation);
        this.myForm.controls.jobDescription.setValue(this.user.jobDescription);
        this.myForm.controls.resumeNameFr.setValue(this.user.resumeNameFr);
        this.myForm.controls.resumeNameEn.setValue(this.user.resumeNameEn);
      }         
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


