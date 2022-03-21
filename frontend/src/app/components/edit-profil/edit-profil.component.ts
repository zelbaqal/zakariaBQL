import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userServices/user.service';
import { UserEditInfo } from './partials/accountDetails/account-details.component';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  image:File;
 

  constructor(private userService : UserService) {
    
   }

  ngOnInit(): void {
    
  }

  onImageSelected(image:File){
    this.image = image;
  }

  onSubmitForm(user:UserEditInfo){
   
    //Create a form data
    const formData = new FormData();
          formData.append("userInfo", new Blob([JSON.stringify(user)],{type:"application/json"})); 
          if(this.image?.size){
            formData.append('userImage', this.image);
          }
    //Call service to send new data to backend
    this.userService.updateUserProfilInformation(formData).subscribe(response =>{
      //redirect
      //notifacation for success
      console.log(response);
    });
  }



}
