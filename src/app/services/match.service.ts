import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = "http://localhost:3000/matches"

  constructor(private httpClient: HttpClient) { }
  getAllMatches() {
    return this.httpClient.get<{T:any}>(this.matchUrl)
  }
  getMatchById(id: any) {
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`)
  }
  deleteMatchById(id: any) {
    return this.httpClient.delete(`${this.matchUrl}/${id}`)
  }
  addMatch(matchObj: any) {
    return this.httpClient.post<{isAdded:boolean}>(this.matchUrl, matchObj)
  }
  editMatch(newMatch: any) {
    return this.httpClient.put<{mes:string}>(this.matchUrl, newMatch)
  }

}
