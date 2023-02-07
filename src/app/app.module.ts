
// * File: app.module.ts
// * Author: Juhász Roland
// * Copyright: 2023, Juhász Roland
// * Group: Szoft II N
// * Date: 2023-02-06
// * Github: https://github.com/Roleeygit
// * Licenc: GNU GPL


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LoginComponent } from './login/login.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GithubComponent,
    TaskComponent,
    CopyrightComponent,
    LoginComponent,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
