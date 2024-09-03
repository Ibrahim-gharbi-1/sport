import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  matchesTitle:string="matches"
  playersTitle:string="players"
  teamsTitle:string="teams"
    stadiumsTitle:string="stadiums"
 
}
