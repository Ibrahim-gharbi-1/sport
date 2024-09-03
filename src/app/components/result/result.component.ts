import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() obj:any;

  constructor() { }

  ngOnInit(): void {
  }
resulColor(s1:number,s2:number){
  if (s1<s2) {
    return 'red' 
  }
  else if (s1>s2) {
    return 'green'
  }
  else{
    return 'blue'
  }

}
scoreResult(s1:number,s2:number){
  if (s1<s2) {
    return 'win' 
  }
  else if (s1>s2) {
    return 'loss'
  }
  else{
    return 'draw'
  }

}

}
