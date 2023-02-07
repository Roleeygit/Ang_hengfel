// * File: tictactoe.component.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-07
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss'],
  template: `
  <div class="container mt-3">
    <table class="player-table">
      <tr>
        <td class="player-one">Player 1: X</td>
        <td class="player-two">Player 2: O</td>
      </tr>
      <tr>
        <td class="player-one-score">Score: <span id="playerOneScore">0</span></td>
        <td class="player-two-score">Score: <span id="playerTwoScore">0</span></td>
      </tr>
    </table>
    <table class="game-table mt-3">
      <tr *ngFor="let row of [0, 1, 2]">
        <td *ngFor="let col of [0, 1, 2]" (click)="clickCell(row, col)">
          {{grid[row][col]}}
        </td>
      </tr>
    </table>
  </div>
  `
})
export class TictactoeComponent implements OnInit 
{
  
  ngOnInit(): void 
  {
    this.currentPlayer = this.playerOne;
  }

  grid: (string|"")[][] = 
  [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  winner: string|"" = "";
  currentPlayer !: string;
  playerOne: string = 'X';
  playerTwo: string = 'O';
  playerOneScore: number = 0;
  playerTwoScore: number = 0;

  constructor() { }

  clickCell(row: number, col: number): void 
  {
    if (this.grid[row][col] === "") 
    {
      this.grid[row][col] = this.currentPlayer;
      if (this.checkWin()) 
      {
        this.updateScore();
        this.reset();
      } else if (this.checkDraw()) 
      {
        this.reset();
      } else 
      {
        this.switchPlayer();
      }
    }
  }
  

  checkWin(): boolean 
  {
    const grid = this.grid;
  
    // check rows
    for (let i = 0; i < 3; i++) {
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2] && grid[i][0] !== "") 
      {
        this.winner = grid[i][0];
        return true;
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] !== "") 
      {
        this.winner = grid[0][i];
        return true;
      }
    }
    // check diagonals
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== "") 
    {
      this.winner = grid[0][0];
      return true;
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] !== "") 
    {
      this.winner = grid[0][2];
      return true;
    }
    return false;
  }
  
  updateScore(): void {
    if (this.winner === this.playerOne) 
    {
      this.playerOneScore++;
    } else if (this.winner === this.playerTwo) 
    {
      this.playerTwoScore++;
    }
  }

  switchPlayer(): void 
  {
    this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }


  reset(): void 
  {
    this.grid = 
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    this.winner = "";
    this.currentPlayer = 'X';
  }

  
  checkForWinner(): void 
  {
    for (let row = 0; row < 3; row++) 
    {
      if (
        this.grid[row][0] === this.currentPlayer &&
        this.grid[row][1] === this.currentPlayer &&
        this.grid[row][2] === this.currentPlayer
      ) 
      {
        this.winner = this.currentPlayer;
        this.updateScore();
        return;
      }
    }
  
    for (let col = 0; col < 3; col++) 
    {
      if (
        this.grid[0][col] === this.currentPlayer &&
        this.grid[1][col] === this.currentPlayer &&
        this.grid[2][col] === this.currentPlayer
      ) 
      {
        this.winner = this.currentPlayer;
        this.updateScore();
        return;
      }
    }
  
    if (
      this.grid[0][0] === this.currentPlayer &&
      this.grid[1][1] === this.currentPlayer &&
      this.grid[2][2] === this.currentPlayer
    ) 
    {
      this.winner = this.currentPlayer;
      this.updateScore();
      return;
    }
  
    if (
      this.grid[0][2] === this.currentPlayer &&
      this.grid[1][1] === this.currentPlayer &&
      this.grid[2][0] === this.currentPlayer
    ) 
    {
      this.winner = this.currentPlayer;
      this.updateScore();
      return;
    }
  }

  checkDraw(): boolean 
  {
    let draw = true;
    for (let i = 0; i < 3; i++) 
    {
      for (let j = 0; j < 3; j++) 
      {
        if (this.grid[i][j] === "") 
        {
          draw = false;
          break;
        }
      }
    }
    return draw;
  }

}
