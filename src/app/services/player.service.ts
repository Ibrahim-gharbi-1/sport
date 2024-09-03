import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl: string = "http://localhost:3000/players"
  constructor(private http: HttpClient) { }
  addPlayer(obj: any) {
    return this.http.post<{isAdded:any}>(this.playerUrl,obj)
  }
  editPlayer(obj: any) {
    return this.http.post(this.playerUrl, obj)
  }
  getAllPlayers() {
    return this.http.get<{T:any}>(this.playerUrl)
  }
  getPlayerById(id: any) {
    return this.http.get<{player:any}>(`${this.playerUrl}/${id}`)
  }
  deletePlayerById(id: any) {
    return this.http.delete(`${this.playerUrl}/${id}`)
  }
}
