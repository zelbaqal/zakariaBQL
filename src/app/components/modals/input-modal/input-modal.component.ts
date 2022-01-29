import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export interface InputConfig{
  inputTitle : string;
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
    }
  ]
})
export class InputModalComponent implements ControlValueAccessor, OnDestroy {

  @Input()
  inputConfig: InputConfig;
 
  onChangeSub : Subscription | undefined;
  

  infoGeneralForm : FormGroup = this.fb.group({
    fieldFR : [null, Validators.required],
    fieldEN : [null, Validators.required]
  })
 
  onTouched = () => {};

  constructor(private fb : FormBuilder, private translate : TranslateService ) { 
    
  }

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
  }

  setDisabledState(disabled:boolean){
    if(disabled){
      this.infoGeneralForm.disable();
    }
    else{
      this.infoGeneralForm.enable();
    }
  }

  ngOnDestroy() {
      this.onChangeSub?.unsubscribe();
  }
 

}
