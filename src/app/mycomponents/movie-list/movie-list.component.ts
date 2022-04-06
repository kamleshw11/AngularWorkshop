import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies = [
    { item: "movie1", flagWatched: "false" },
    { item: "movie2", flagWatched: "false" },
    { item: "movie3", flagWatched: "false" },
    { item: "movie4", flagWatched: "false" },
    { item: "movie5", flagWatched: "false" },
  ]

  watched: Array<any> = [];
  addToWatchedList(movie: any) {
    if (this.watched.includes(movie)) {
      alert("already added");
    }
    else {
      this.watched.push(movie);
      this.movies.pop();
    }
  }
  removeFromWatchedList() {
    this.watched.pop();
  }




constructor() { }

ngOnInit(): void {
}

}
