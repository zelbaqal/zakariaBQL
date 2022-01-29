import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { InputConfig } from '../input-modal/input-modal.component';


@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent{

  inputsConfig : InputConfig[] = [
    {
      inputTitle : 'salutation', 
      inputPlaceHolder:{
        fr:'Insérer votre salutation en Français',
        en:'Write your salutation in English'
      }
    },
    {
      inputTitle : 'presentation', 
      inputPlaceHolder:{
        fr:'Insérer votre présentation en Français',
        en:'Write your presentation in English'
      }
    },
    {
      inputTitle : 'jobDescription', 
      inputPlaceHolder:{
        fr:'Insérer votre fonction en Français',
        en:'Write your job in English'
      }
    }
]

  public files: NgxFileDropEntry[] = [];

  myForm: FormGroup = this.fb.group({
    salutation : [null, Validators.required],
    presentation : [null, Validators.required],
    jobDescription : [null, Validators.required]
  });

  constructor(private fb : FormBuilder) { }
 

  
  getFileName(){
    if(this.files.length > 0){
      return this.files[0].fileEntry.name;
    }
    return "Drag and drop your CV";
    
  }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

        

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event:any){
    console.log(event);
  }

  public fileLeave(event:any){
    console.log(event);
  }

   submitClicked(){
      console.log(this.myForm.value);
      console.log(this.myForm.valid);
  }

}
