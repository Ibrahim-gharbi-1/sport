import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddPlayerComponent } from './components/addPlayer/add-player.component';
import { CreateMatchComponent } from './components/creatematch/create-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllMatchesComponent } from './components/all-matches/all-matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'signup', component: SignupComponent },
  { path:'signupAdmin', component: SignupComponent },
  { path:'login', component: LoginComponent },
  { path:'addMatch', component: CreateMatchComponent},
  { path:'addPlayer', component: AddPlayerComponent },
  { path:'addTeam', component: AddTeamComponent },
  { path:'admin', component: AdminComponent },
  { path:'matches', component: AllMatchesComponent },
  { path:'players', component: PlayersComponent },
  { path:'search', component: SearchMatchesComponent },
  { path:'editMatch/:id', component: EditMatchComponent },
  { path:'searchPlayer/:scoreOne/:scoreTwo', component: SearchPlayersComponent },
  // matchinfo/:id
  // path parametré
  { path:'matchInfo/:id', component: MatchInfoComponent },
  { path:'teamInfo/:id', component: TeamInfoComponent },
  { path:'playerInfo/:id', component: PlayerInfoComponent },
  { path:'weather', component: WeatherComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
