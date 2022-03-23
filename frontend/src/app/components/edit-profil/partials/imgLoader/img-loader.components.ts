import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ConstantVariables } from "src/app/services/ConstantVariables";
import { PublicResourcesService } from "src/app/services/public-resources/public-resources.srvice";
import { UserService } from "src/app/services/userServices/user.service";


@Component({
    selector: 'img-loader',
    template: `<div class="card mb-4 mb-xl-0">
                    <div class="card-header">{{"ACCOUNTDETAILS.profilePic" | translate}}</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="img-account-profile rounded-circle mb-2" [src]="imageSrc || 'https://via.placeholder.com/180'" alt="your image"/>
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">{{"ACCOUNTDETAILS.imageSize" | translate}}</div>
                        <!-- Profile picture upload button-->
                        <input type="file" style="display: none" #imgFile (change)="readURL($event);"/>
                        <button (click)="imgFile.click()" class="btn btn-secondary" type="file">{{"ACCOUNTDETAILS.uploadButton" | translate}}</button>
                    </div>
             </div>`,
    styleUrls : ['./img-loader.component.css']
  })
  export class ImageLoaderComponent implements OnInit {
  
    imageSrc: any = `${ConstantVariables.DOMAIN}/api/public/colaborators/avatar.png`;;
   
    @Output() validImageProfil = new EventEmitter<File>();

    constructor(private userService : UserService, private publicService : PublicResourcesService) { }

    ngOnInit(): void {

      this.publicService.getUserToEdit().subscribe(user=>{
        if(user.imageName){
          this.imageSrc = `${ConstantVariables.DOMAIN}/api/public/colaborators/${user.imageName}`;
        }
      })
        
    }

    readURL(event: any): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          if(file.size > 20000) return;
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
  
          reader.readAsDataURL(file);
          this.validImageProfil.emit(file);
      }
  }
   
  }