import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'file-drager',
  templateUrl: './file-drager.component.html',
  styleUrls: ['./file-drager.component.css']
})
export class FileDragerComponent implements OnInit {

  @Input() langKey : string;
  @Output() onFileChange : EventEmitter<Map<string,File>>;
  files:NgxFileDropEntry[]=[];
  errors:string[];

  constructor() { 
    this.onFileChange = new EventEmitter<Map<string,File>>();
     this.errors =[];
  }

  ngOnInit(): void {
  }

   getFileNameEn(){
      if(this.files.length > 0){
        return this.files[0].fileEntry.name;
      }
      return "FILES.uploadCvTextEnglish";
    }

    isFileAllowed(fileName: string):boolean {
      let isFileAllowed = false;
      const allowedFiles = ['.pdf']; //['.pdf', '.jpg', '.jpeg', '.png']
      const regex = /(?:\.([^.]+))?$/;
      const extension = regex.exec(fileName);
      if (undefined !== extension && null !== extension) {
        for (const ext of allowedFiles) {
          if (ext === extension[0]) {
            isFileAllowed = true;
          }
        }
      }
      return isFileAllowed;
  }

  isFileSizeAllowed(size:number) : boolean {
    let isFileSizeAllowed = false;
    if (size < 1000000) {
      isFileSizeAllowed = true;
    }
    return isFileSizeAllowed;

  }

 

   droppedFile(files: NgxFileDropEntry[]) {
    this.errors = [];
    if(files.length > 1){
      this.errors.push("fileSelectError")
    }else{
      for (const droppedFile of files) {
            if (droppedFile.fileEntry.isFile && this.isFileAllowed(droppedFile.fileEntry.name)) {
              //Is a pdf file
              const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
              fileEntry.file((file: File) => {
                //Is file size allowed
                if(this.isFileSizeAllowed(file.size)){
                  this.files = files;
                  this.onFileChange.emit(new Map([[this.langKey, file]]));
                }else{
                  //File size not allowed
                  this.errors.push('fileSizeError');
                }
                  
              })
            }else{
              //Not a pdf file
              this.errors.push("fileFormatError");
            }
          }
      }
    }

    public fileOver(event:any){
      console.log(event);
    }

    public fileLeave(event:any){
      console.log(event);
    }

}
