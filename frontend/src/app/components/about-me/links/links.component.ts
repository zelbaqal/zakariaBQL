import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConstantVariables } from 'src/app/services/ConstantVariables';
import { UserService } from 'src/app/services/userServices/user.service';


 

@Component({
  selector: 'links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {


  @Input() link : any;
  isAdmin : boolean;
  urlLink : any = `${ConstantVariables.DOMAIN}/api/public/colaborators/`;
  showMode : boolean = true;
  linkData : Link ;
  linkImage : File;


  constructor(private authService :AuthService, private userService : UserService) {
    
   }

  ngOnInit(): void {
    this.urlLink = `${ConstantVariables.DOMAIN}/api/public/colaborators/` + this.link.linkImageName;
    this.isAdmin = this.authService.isAdmi();
    this.linkData = this.link;
  }

  toggleShowMode(){
    this.urlLink = `${ConstantVariables.DOMAIN}/api/public/colaborators/${this.link.linkImageName}`;
    //this.urlLink += this.link.linkImageName;
    this.showMode = !this.showMode;
   // http://localhost:8080/api/public/colaborators/link-facebook.pnglink-facebook.png
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.linkImage = file;
        const reader = new FileReader();
        reader.onload = e => this.urlLink = reader.result;

        reader.readAsDataURL(file);
    }
  }

  updateData(){
    //create a link object ===> linkData
    //create a form data data
    const formData = new FormData();
    formData.append('link', new Blob([JSON.stringify(this.linkData)], {type:"application/json"}));
   
    if(this.linkImage?.size){
      formData.append('linkImage', this.linkImage);
    }
    // Send data to backend using service
    this.userService.updateThisLinkInfo(formData).subscribe(link => {
      this.urlLink = `${ConstantVariables.DOMAIN}/api/public/colaborators/` + link.linkImageName;
      this.link = link;
    });
    // Update UI
    //this.urlLink = `${ConstantVariables.DOMAIN}/api/public/colaborators/` + this.link.linkImageName;
   // this.link.linkDescription = "jjjjj";
    this.toggleShowMode();
    
  }

}
