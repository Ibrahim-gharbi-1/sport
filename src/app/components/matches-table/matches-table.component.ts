import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  display(a: string) {
    alert("matche n°" + a + " displayed");
  }
  edit(a: string) {
    alert("matche n°" + a + " is edited");
  }
  delete(a: string) {
    alert("matche n°" + a + " is deleted");
  }
  constructor(private router: Router, private mService: MatchService) { }
  matchesTab: any = []
  ngOnInit() {
    //this.matchesTab=JSON.parse(localStorage.getItem('matches')||'[]')
    this.mService.getAllMatches().subscribe((response)=>{this.matchesTab=response.T

    });
  }

  deleteMatch(id: number) {
    // let Tab1 = JSON.parse(localStorage.getItem(key)||'[]')
    // let indexToDelete =Tab1.findIndex((Tab1:any) => Tab1.id === id)
    // Tab1.splice(indexToDelete, 1);
    // localStorage.setItem(key,JSON.stringify(Tab1))
    // location.reload()
    this.mService.deleteMatchById(id).subscribe(
      (response)=>{console.log("here response after delete",response)
        this.mService.getAllMatches().subscribe(
          (data)=>{
            this.matchesTab=data.T
          }
        )
      });

  }
  goToInfo(id: Number) {
    alert(id)
    this.router.navigate([`matchInfo/${id}`])
  }

  goToEdit(id: Number) {
    alert(id)
    this.router.navigate([`editMatch/${id}`])
  }





  team2(s1: number, s2: number, team2: string) {
    if (s1 > s2) {
      return ['red', team2, ' lose']
    }
    else if (s1 < s2) {
      return ['green', team2, ' win']
    } else {
      return ['blue', '', " Draw"]
    }
  }


}
