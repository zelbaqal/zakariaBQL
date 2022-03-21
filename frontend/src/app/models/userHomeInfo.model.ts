import { FielldsLanguage } from "./fields.model";

export interface Deserializable {
  deserialize(input: any): this;
}

export class UserHomeInfo implements Deserializable {

  userId:number;
  salutation: FielldsLanguage;
  presentation: FielldsLanguage ;
  jobDescription: FielldsLanguage;
  resumeNameFr : string;
  resumeNameEn : string;

  constructor(){
      this.salutation = new FielldsLanguage();
      this.presentation = new FielldsLanguage();
      this.jobDescription = new FielldsLanguage();
      this.resumeNameEn = "";
      this.resumeNameFr = "";
  }

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}