// * File: app.routing.module.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { GithubComponent } from './github/github.component';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';


const routes: Routes = 
[
  {path: "about", component: AboutComponent},
  {path: "github", component: GithubComponent},
  {path: "task", component:TaskComponent},
  {path: "copyright", component:CopyrightComponent},
  {path: "login", component:LoginComponent},
  {path: "tictactoe", component: TictactoeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
