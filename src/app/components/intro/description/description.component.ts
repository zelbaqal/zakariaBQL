import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private languageService : LanguageService) { }

  ngOnInit(): void {
  }

}
