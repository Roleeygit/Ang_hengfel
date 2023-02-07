// * File: task.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06_07
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  link = "https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0318";
  constructor() { }

  ngOnInit(): void {
  }

}
