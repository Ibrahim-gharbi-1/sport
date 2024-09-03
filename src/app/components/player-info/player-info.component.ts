import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playerId:any
  player:any={}
  constructor(private activatedRoute:ActivatedRoute,private mService:PlayerService) { }

  ngOnInit(){
    this.playerId=this.activatedRoute.snapshot.params['id']
    this.mService.getPlayerById(this.playerId).subscribe(
      (data)=>{
console.log("here is player",data)
this.player=data.player
      }
    );
  }

}
