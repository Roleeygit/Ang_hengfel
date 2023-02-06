// * File: app.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit 
{
  surfaceAreaForm !: FormGroup;
  surfaceArea !: number;

  ngOnInit() 
  {
    this.surfaceAreaForm = new FormGroup({
    radius: new FormControl(0),
    height: new FormControl(0),
    });
  }

  calculateSurfaceArea() 
  {
    const { radius, height } = this.surfaceAreaForm.value;
    this.surfaceArea = 2 * Math.PI * radius * (radius + height);
  }

  onKeyup(event: any) 
  {
    console.log(event.key);
    if (event.key === 'Enter') 
    {
      console.log('User megnyomta enter');
    }
  }
}