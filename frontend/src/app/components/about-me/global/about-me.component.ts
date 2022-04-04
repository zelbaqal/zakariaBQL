import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConstantVariables } from 'src/app/services/ConstantVariables';
import { LanguageService } from 'src/app/services/language/language.service';
import { PublicResourcesService } from 'src/app/services/public-resources/public-resources.srvice';
import { UserEditInfo } from '../../edit-profil/partials/accountDetails/account-details.component';



@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  user : UserEditInfo;
  fullname:string;
  description:any;
  imageUrl : string = `${ConstantVariables.DOMAIN}/api/public/colaborators/`;
  

  constructor(private publicService : PublicResourcesService, private translateService : TranslateService) { 
    
  }

  ngOnInit(): void {  

    let descriptionByLang = `description${this.capitalize(this.translateService.currentLang)}`;

    this.publicService.getUserToEdit().subscribe(user => {
      this.user = user;
      this.fullname = user.firstname + ' ' + user.lastname;
      this.description = user[descriptionByLang as keyof UserEditInfo];
      this.imageUrl += user.imageName;
    });

    this.translateService.onLangChange.subscribe(()=>{
      descriptionByLang = `description${this.capitalize(this.translateService.currentLang)}`;
      this.description = this.user[descriptionByLang as keyof UserEditInfo];
    });

    

    
    
  }

  capitalize(word:string):string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

}
