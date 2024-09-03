import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogTab:any=[
    {title:"is nymar from jandouba",description:"some news says that nymar is from jandouba but they're not sure about it",date:"May 20, 2020"},
    {title:"is cristiano from Gafsa",description:"some news says that cristiano is from gafsa but they're not sure about it",date:"october 30, 2050"}
  ]

}
