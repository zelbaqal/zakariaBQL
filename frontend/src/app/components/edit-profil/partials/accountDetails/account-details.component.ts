import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoadingService } from "src/app/services/divers/loader.service";
import { PublicResourcesService } from "src/app/services/public-resources/public-resources.srvice";
import { UserService } from "src/app/services/userServices/user.service";




export class UserEditInfo{
    constructor(
        public userId?:number,
        public firstname?:string, 
        public lastname?:string,
        public imageName?:string,
        public email?:string,
        public password?: string,
        public city?:string,
        public country?:string,
        public phone?:string,
        public birthday?:Date,
        public descriptionFr?:string,
        public descriptionEn?:string,
        public links?:[] ,
        public roles?:string[]){}

       
}

@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls : ['./account-details.component.css']
  })
  export class AccountDetailsComponent implements OnInit {

    
    @Output() submitFormEvent = new EventEmitter<UserEditInfo>();
  
    user : UserEditInfo = new UserEditInfo();

    userInfoForm: FormGroup; 
    firstname = new FormControl(this.user.firstname, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]);
    lastname = new FormControl(this.user.lastname, [Validators.required,  Validators.minLength(4), Validators.maxLength(30)]);
    email = new FormControl(this.user.email, [Validators.required, Validators.email]);
    password = new FormControl(this.user.password, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]);
    city = new FormControl(this.user.city, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]);
    country = new FormControl(this.user.country, [Validators.required,  Validators.minLength(4), Validators.maxLength(30)]);
    phone = new FormControl(this.user.phone, [Validators.required, Validators.pattern("[06][0-9]{9}")]);
    birthday = new FormControl(this.formatDate(this.user.birthday), [Validators.required]);
    descriptionFr = new FormControl(this.user.descriptionFr, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]);
    descriptionEn = new FormControl(this.user.descriptionEn, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]);
    
    loading$ = this.loader.loading$;
    
    constructor(public loader: LoadingService, 
                private fb : FormBuilder,
                private publicService : PublicResourcesService, 
                private userService : UserService) {
   
     }

    ngOnInit(): void {
      this.userInfoForm = this.fb.group({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        city: this.city,
        country: this.country,
        phone: this.phone,
        birthday: this.birthday,
        descriptionFr: this.descriptionFr,
        descriptionEn: this.descriptionEn
      })

      //get UserInfo
      this.publicService.getUserToEdit().subscribe(user => {
        this.user = user;
        //set user info in the form
        this.setUserObjectToForm(user, this.userInfoForm);
      })

    }

    logsubmitUserInfo() {
      if(this.userInfoForm.valid){
        this.user = this.setFormValueToUserObject(this.user, this.userInfoForm);
        this.submitFormEvent.emit(this.user);
      }
      }

     setFormValueToUserObject(object:any, form : FormGroup):any{
      Object.keys(form.controls).forEach(key => {
        object[key] = form.controls[key].value;
      });
      return object;
     }

     setUserObjectToForm(object:any, form : FormGroup):any{
      Object.keys(form.controls).forEach(key => {
        if(key === 'birthday'){
          form.controls[key].setValue(this.formatDate(new Date(object[key])));
        }else{
          form.controls[key].setValue(object[key]);
        }
      });
     }

     private formatDate(date?:Date) {
      const d = new Date(date || '');
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
    }
   
  }