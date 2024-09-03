import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  m:any ={scoreOne:"2",scoreTwo:"4",teamOne:"cab",teamTwo:"jvs"}

  constructor() { }

  ngOnInit(): void {
  }

}
