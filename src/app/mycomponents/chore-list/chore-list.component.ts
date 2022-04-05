import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.scss']
})


export class ChoreListComponent implements OnInit {
  // chores= [
  //   { item: "chore1" },
  //   { item: "chore2" },
  //   { item: "chore3" },
  //   { item: "chore4" },
  //   { item: "chore5" },
  // ]
  ychores=["kamlesh","hrishi","kalpu","ram"]
    // tchores=[]
  tchores=["kamlesh","hrishi"]
  tmchores=["kamlesh","hrishi"]
  constructor() { }

  ngOnInit(): void {
  }

}
