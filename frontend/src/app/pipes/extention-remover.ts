import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'extentionRemover'
  })
  export class ExtentionRemover implements PipeTransform {
  
    transform(filename: string): string {
  
      return filename.split('.')[0];

    }
  
  }