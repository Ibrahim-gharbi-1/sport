import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  constructor(private router: Router, private teamService: TeamService) { }
  teamsTab: any = []
  ngOnInit() {
    this.teamService.getAllTeams().subscribe((response) => {
      console.log("here response ", response.T);
      
      this.teamsTab = response.T;
    });
  }

  deleteTeam(id: number) {
    this.teamService.deleteTeamById(id).subscribe(
      (response) => {
        console.log("here response after delete", response)
        this.teamService.getAllTeams().subscribe(
          (data) => {
            this.teamsTab = data.T
          }
        )
      });
  }


  display(id: any) {
    this.router.navigate([`teamInfo/${id}`])
  }
  edit(a: string) {
    alert("team n°" + a + " is edited");
  }

}
