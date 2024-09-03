import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
   match:any={}
  constructor(private activatedRoute:ActivatedRoute, private mService:MatchService) {}
  matchId:any
  ngOnInit(){
    this.matchId=this.activatedRoute.snapshot.params['id']
    // let matchesTab=JSON.parse(localStorage.getItem('matches')||'[]')
    // for (let i = 0; i < matchesTab.length; i++) {
    //   if (matchesTab[i].id==this.matchId) {
    //     this.match=matchesTab[i];
    //     break;
    //   }
    // }
    this.mService.getMatchById(this.matchId).subscribe(
      (data)=>{
console.log("here is match",data)
this.match=data.match
      }
    );
  }
}
