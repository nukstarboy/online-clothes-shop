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
import { GridRowComponent } from './home/grid-row/grid-row.component';
import {MatCardModule} from "@angular/material/card";
import { ImportantIconsComponent } from './home/important-icons/important-icons.component';
import { EndPictureComponent } from './home/end-picture/end-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    HomeScreenPageComponent,
    GridCollectionsRowComponent,
    GridRowComponent,
    ImportantIconsComponent,
    EndPictureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
