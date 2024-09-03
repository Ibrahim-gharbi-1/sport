import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  match: any = {}
   T: any = []
   
  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private mService:MatchService) { }
  searchMatchesForm!: FormGroup
  ngOnInit(){
    this.searchMatchForm =this.formBuilder.group({
      scoreOne:['',[Validators.required]],
      scoreTwo:['',[Validators.required]],
    })

  }
  searchMatchForm!:FormGroup

}
