import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  matchesTab: any = [
    { id: 1, scoreOne: 1, scoreTwo: 6, teamOne: "rmd", teamTwo: "fcb" },
    { id: 2, scoreOne: 8, scoreTwo: 2, teamOne: "ca", teamTwo: "est" },
    { id: 3, scoreOne: 1, scoreTwo: 5, teamOne: "liv", teamTwo: "cit" }
  ]
}
