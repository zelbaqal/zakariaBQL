import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  para:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut tota obcaecati laboriosam quia sint facilis possimus animi consequuntur vel. Odit qui hitenetur fuga inventore quidem nihil, odio deserunt";

  constructor() { }

  ngOnInit(): void {  
  }

}
