// * File: github.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  github = 'http://github.com/Roleeygit';

}
