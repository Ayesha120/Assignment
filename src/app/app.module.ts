import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BookmarkedRepoComponent } from './repository/bookmarked-repo/bookmarked-repo.component';
import { SearchRepoComponent } from './repository/search-repo/search-repo.component'; 


@NgModule({
  declarations: [
    AppComponent, 
    BookmarkedRepoComponent,
    SearchRepoComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
