import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "http://localhost:3000/teams"
  constructor(private httpClient: HttpClient) { }
  addTeam(teamObj: any) {
    return this.httpClient.post<{isAdded:boolean}>(this.teamUrl, teamObj)
  }
  deleteTeamById(id: any) {
    return this.httpClient.delete(`${this.teamUrl}/${id}`)
  }
  getAllTeams() {
    return this.httpClient.get<{T:any}>(this.teamUrl)
  }
  editTeam(newTeam: any) {
    return this.httpClient.put(this.teamUrl, newTeam)
  }
  getTeamById(id: any) {
    return this.httpClient.get<{team:any}>(`${this.teamUrl}/${id}`)
  }
}
