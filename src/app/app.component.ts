//  * File: app.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06_07
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
  surfaceAreaForm!: FormGroup;
  surfaceArea!: number;
  countdown = 5;

  ngOnInit() 
  {
  this.surfaceAreaForm = new FormGroup({
  radius: new FormControl(0),
  height: new FormControl(0),
  });
  }

  startCountdown() 
  {
  const intervalId = setInterval(() => {
    if (this.countdown === 0) 
    {
      clearInterval(intervalId);
      window.confirm("Oldal frissítve!");
      window.location.reload();
    }
    this.countdown--;
    }, 1000);
  }

  calculateSurfaceArea() 
  {
    const { radius, height } = this.surfaceAreaForm.value;
    this.surfaceArea = 2 * Math.PI * radius * (radius + height);
    this.startCountdown();
  }

  onKeyup(event: any) 
  {
    if (event.key === 'Enter') 
    {
      
    }
  }
}

