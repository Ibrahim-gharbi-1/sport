import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display(a:string) {
    alert("stadium n°"+a+" displayed");
  }
  edit(a:string) {
    alert("stadium n°"+a+" is edited");
  }
  delete(a:string) {
    alert("stadium n°"+a+" is deleted");
  }
stadiumsTab:any=[
  {id:1,name:"rader",country:"tunisia",capacity:"6500"},
  {id:1,name:"coup new ",country:"spain",capacity:"8000"}, 
  {id:1,name:"ber",country:"spain",capacity:"90000"},
]

}
