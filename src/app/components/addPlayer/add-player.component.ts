import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  title:string="add player"
 //object
 player:any={}
 //form id
 playerForm!:FormGroup
  constructor(private mService:PlayerService,private Tservice:TeamService,private router:Router) { }
team:any=[]
  ngOnInit(): void {
this.Tservice.getAllTeams().subscribe(
  (data)=>{
    this.team=data.T
  }
)
  }
  addPlayer(){
    this.mService.addPlayer(this.player).subscribe(
      (response)=>{
        console.log("here is the response after adding a player",response)
        this.router.navigate(['/admin']);
      }
    );
  }
}
