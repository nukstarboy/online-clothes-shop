import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import { HomeScreenPageComponent } from './home/home-screen-page/home-screen-page.component';
import { GridCollectionsRowComponent } from './home/grid-collections-row/grid-collections-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    HomeScreenPageComponent,
    GridCollectionsRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
