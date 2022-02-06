import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
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

  
  @Input() public userId:number;
 
  myForm: FormGroup;
  public filesFR: NgxFileDropEntry[] = [];
  public filesEN: NgxFileDropEntry[] = [];
  cvFileFrensh : File = new File([],"");
  cvFileEnglish : File = new File([],"");;

  constructor(private outputservice : OutPutService,
              private userService : UserService) {

                this.myForm  = new FormGroup({
                      userId : new FormControl(null),
                      salutation : new FormControl(null,Validators.required),
                      presentation : new FormControl(null,Validators.required),
                      jobDescription : new FormControl(null,Validators.required),
                    });  
              }


  ngOnInit(): void {
      if(this.userId){
        this.userService.getGlobalInfoUser(this.userId).subscribe(data =>{
          this.myForm.controls.userId.setValue(this.userId);
          this.myForm.controls.salutation.setValue(data.salutation);
          this.myForm.controls.presentation.setValue(data.presentation);
          this.myForm.controls.jobDescription.setValue(data.jobDescription);
          //TODO Get files names's from DB
        });
      }
              
    }

    
        
 
  
  
  

      
    fileChange(file: Map<string,File>){
      file.forEach((value:File, key:string)=>{
        if(key === 'fr'){
          this.cvFileFrensh = value;
        }else if(key === 'en'){
          this.cvFileEnglish = value;
        }
      })
    }

  checkFilesValidity():boolean{
    return this.cvFileFrensh.size > 0 && this.cvFileEnglish.size > 0;
  }
   

  closeCurrentModal(){
    this.outputservice.closeModal();
  }

  submitClicked(){
    if(this.myForm.valid && this.cvFileFrensh.size > 0 && this.cvFileEnglish.size > 0){
        const formData = new FormData();
        formData.append("userInfo", new Blob([JSON.stringify(this.myForm.value)],{type:"application/json"})); 
        formData.append('cvFileFR', this.cvFileFrensh);
        formData.append('cvFileEN', this.cvFileEnglish);
        //TO DO send request to server
        this.userService.updateUserInformation(formData).subscribe(data => {
          console.log(data);
          this.outputservice.submitEvent.emit(data);
        })
    }
}

 



}


