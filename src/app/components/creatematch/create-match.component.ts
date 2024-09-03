import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {
  //object
  match: any = {}
  //form id
  matchForm!: FormGroup
  constructor(private mService:MatchService,private router:Router) { }
  ngOnInit(): void {
  }
  addMatch() {
    // console.log('add match btn clicked', this.match)
    // var matchesTab = JSON.parse(localStorage.getItem("matches") || "[]")
    // this.match.id = this.generateID(matchesTab)
    // matchesTab.push(this.match)
    // localStorage.setItem("matches", JSON.stringify(matchesTab))
    this.mService.addMatch(this.match).subscribe(
      (response)=>{
        console.log("here is the response after adding a match",response)
        this.router.navigate(['/admin']);
      }
    );
  }
 

}
