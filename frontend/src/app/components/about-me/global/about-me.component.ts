import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  para:string = "Développeur full stack Java/Jee - Javascript et certifié Scrum, avec un an d’expérience. Polyvalent, je maîtrise les frameworks Spring et Angular et aussi les différentes étapes techniques de la création d’un site ou d’une application web, de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance."

  constructor() { }

  ngOnInit(): void {  
  }

}
