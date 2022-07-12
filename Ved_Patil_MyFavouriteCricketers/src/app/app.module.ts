import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FilterCricketPlayerTypePipe } from './filter-cricket-player-type.pipe';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    FilterCricketPlayerTypePipe,
    ContentDetailComponent,
    ContentSearchComponent,
    PagenotfoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
