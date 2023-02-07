// * File: copyright.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-07
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  constructor() { }
  copyright = "Juhász Roland";
  copyright_text = "A munkát készitette: Juhász Roland lincenszért és egyéb információért fordulj hozzá. ";
  ngOnInit(): void {
  }

}
