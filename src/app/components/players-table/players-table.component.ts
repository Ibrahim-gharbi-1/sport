import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  delete(id:any){
    return(id);
  }
  edit(id:any){
    return(id);
  }
  display(id:any){
    this.router.navigate([`playerInfo/${id}`])
  }
  constructor(private router: Router,private playerService: PlayerService) { }
  playersTab: any = []
  ngOnInit(){
    this.playerService.getAllPlayers().subscribe((response)=>{
      this.playersTab=response.T ;});}
    deletePlayer(id:number){
      this.playerService.deletePlayerById(id).subscribe(
        (response)=>{console.log("here response after delete",response)
          this.playerService.getAllPlayers().subscribe(
            (data)=>{
              this.playersTab=data.T
            }
          )
        });   
    }
      
  }
  
