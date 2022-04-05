import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.scss']
})
export class FavLinksComponent implements OnInit {
links=[
  {item:"http://google.com"},
  {item:"http://w3school.com"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
