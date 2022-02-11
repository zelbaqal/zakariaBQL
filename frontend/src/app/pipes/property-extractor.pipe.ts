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

@Pipe({
  name: 'paragrapheLength'
})
export class ParagrapheLength implements PipeTransform {

  transform(paragraphe: string, size: number = 255): string {

    if(paragraphe.length > size){
        let trimmedParagraphe = paragraphe.substring(0, size);

        //re-trim if we are in the middle of a word
        trimmedParagraphe = trimmedParagraphe.substring(0, Math.min(trimmedParagraphe.length, trimmedParagraphe.lastIndexOf(" ")))
        
        return trimmedParagraphe + ' ...';
    }else{
      return paragraphe;
    }
  
   
  }

}
