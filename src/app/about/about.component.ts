// * File: about.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06_07
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    name = 'Juhász Roland'; 
    class = 'Szoft II N';
    date = '2023-02-06_07';

}
