import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent implements OnInit {
  T: any = []
  player: any = {}
  constructor(private formBuilder: FormBuilder) { }
  searchForm!: FormGroup
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      age: ["", [Validators.required]]
    })
  }
  search() {
    this.T = []
    let allPlayers: any = JSON.parse(localStorage.getItem("players") || '[]')
    this.T = allPlayers.filter((elt: any) => this.searchForm.value.age >= elt.age)
    console.log(this.T)
  }
}
