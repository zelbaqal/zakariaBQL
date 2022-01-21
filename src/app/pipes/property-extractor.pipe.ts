import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyExtractor'
})
export class PropertyExtractorPipe implements PipeTransform {

  transform(nameSpace: string, key: string = ""): string {
  
    //NameSpace and key =======> NameSpace.key
    return nameSpace + '.' + key;
  }

}
