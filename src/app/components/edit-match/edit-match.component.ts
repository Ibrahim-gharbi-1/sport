import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm!: FormGroup
  match: any = {}
  matchId: any
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private mService: MatchService) { }
  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.params['id']
    // let matchesTab = JSON.parse(localStorage.getItem('matches') || '[]')
    // for (let i = 0; i < matchesTab.length; i++) {
    //   if (matchesTab[i].id == this.matchId) {
    //     this.match = matchesTab[i];
    //     break;

    //   }
    // }
    this.mService.getMatchById(this.matchId).subscribe(
      (data)=>{
        this.match= data.match
      }
    )
  }
  editMatch() {
    console.log("here match", this.match);
    
    // let matchesTab = JSON.parse(localStorage.getItem('matches') || '[]')
    // for (let i = 0; i < matchesTab.length; i++) {
    //   if (matchesTab[i].id == this.matchId) {
    //      matchesTab[i] = this.match;
    //     break;
    //   }
    // }
    // localStorage.setItem('matches', JSON.stringify(matchesTab))
    this.mService.editMatch(this.match).subscribe();
    this.router.navigate(['admin'])

  }
}
