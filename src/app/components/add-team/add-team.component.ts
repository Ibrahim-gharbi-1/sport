import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
 //object
 team:any={}
 //form id
 TeamForm!:FormGroup
  constructor(private mService:TeamService,private router:Router) { }
  ngOnInit(): void {
  }
  addTeam(){
    // console.log('add team btn clicked',this.team)
    // let teamsTab=JSON.parse(localStorage.getItem("teams")||"[]")
    // teamsTab.push(this.team)
    // localStorage.setItem("teams",JSON.stringify(teamsTab))
    this.mService.addTeam(this.team).subscribe(
      (response)=>{
        console.log("here is the response after adding a team",response)
        this.router.navigate(['/admin']);
      }
    );
  }

}
