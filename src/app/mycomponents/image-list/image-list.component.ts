import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
images=[
  "https://source.unsplash.com/random/200x200/?coding,it",
  "https://source.unsplash.com/random/200x200/?coding,it",
  "https://source.unsplash.com/random/200x200/?coding,it",
  "https://source.unsplash.com/random/200x200/?coding,it"
]
// images=[
//   {item:"https://source.unsplash.com/random/200x200/?coding,it"},
//   {item:"https://source.unsplash.com/random/200x200/?coding,it"},
//   {item:"https://source.unsplash.com/random/200x200/?coding,it"},
//   {item:"https://source.unsplash.com/random/200x200/?coding,it"},
// ]
  constructor() { }

  ngOnInit(): void {
  }

}

