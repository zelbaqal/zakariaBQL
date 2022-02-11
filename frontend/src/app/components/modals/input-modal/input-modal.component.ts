import { AfterViewChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export enum InputType{
  textInput = 1, 
  textAriaInput = 2
}

export interface InputConfig{
  inputTitle : string;
  inputType : InputType
  inputPlaceHolder : {
      fr : string,
      en : string
    };
  }

@Component({
  selector: 'input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputModalComponent
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputModalComponent,
      multi: true
    }
  ]
})
export class InputModalComponent implements ControlValueAccessor, Validator,OnDestroy, OnInit {

  @Input()
  inputConfig: InputConfig;
 
  onChangeSub : Subscription | undefined;
  

  infoGeneralForm : FormGroup;
 
  onTouched = () => {};

  constructor(private translate : TranslateService ) { 
    
  }
  ngOnInit(): void {
   this.infoGeneralForm = new FormGroup({
    fieldFR : new FormControl("",[Validators.minLength(4), Validators.required ]),
    fieldEN : new FormControl("", [Validators.minLength(4), Validators.required]),
  })
  }

  get f() { return this.infoGeneralForm.controls; }


  // accessors
  writeValue(value: any){
    if(value){
      this.infoGeneralForm.setValue(value);
    }
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  registerOnChange(onChange: any){
    this.onChangeSub = this.infoGeneralForm.valueChanges.subscribe(onChange);
    //   distinctUntilChanged()
    // ).subscribe(val => console.log(onChange))
  }

  setDisabledState(disabled:boolean){
    if(disabled){
      this.infoGeneralForm.disable();
    }
    else{
      this.infoGeneralForm.enable();
    }
  }

   validate(c: AbstractControl): ValidationErrors | null{
    //console.log("Basic Info validation",c);
    return this.infoGeneralForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }

  ngOnDestroy() {
      this.onChangeSub?.unsubscribe();
  }


 
 

}
