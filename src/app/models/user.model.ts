import { FielldsLanguage } from "./fields.model";

export interface Deserializable {
  deserialize(input: any): this;
}

export class User implements Deserializable {

  userId:number;
  salutation: FielldsLanguage;
  presentation: FielldsLanguage ;
  jobDescription: FielldsLanguage;

  constructor(){
      this.salutation = new FielldsLanguage();
      this.presentation = new FielldsLanguage();
      this.jobDescription = new FielldsLanguage();

  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}