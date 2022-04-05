import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
movies=[
  {item:"movie1"},
  {item:"movie2"},
  {item:"movie3"},
  {item:"movie4"},
  {item:"movie5"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
