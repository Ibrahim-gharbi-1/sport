import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() obj:any;

  constructor() { }

  ngOnInit(): void {
  }
  playersTab:any=[
    {id:1,name:"cristiano",age:"40",nbr:"7",position:"GK"},
    {id:2,name:"messi",age:"45",nbr:"10",position:"atk"},
    {id:3,name:"robertoCarlos",age:"38",nbr:"14",position:"mid"}
  ]
}
