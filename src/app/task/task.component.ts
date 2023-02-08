// * File: task.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06_07
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  surfaceAreaForm!: FormGroup;
  surfaceArea!: number;
  countdown = 5;
  link = "https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0318";

  constructor() { }

  ngOnInit(): void 
  {
    this.surfaceAreaForm = new FormGroup({
      radius: new FormControl(0),
      lenght: new FormControl(0),
      });
  }

  startCountdown() 
  {
    const intervalId = setInterval(() => 
    {
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
    const { radius, lenght } = this.surfaceAreaForm.value;
    this.surfaceArea = 2 * Math.PI * radius * (radius + lenght);
    this.startCountdown();
  }

  onKeyup(event: any) 
  {
    if (event.key === 'Enter') 
    {
      
    }
  }


}
