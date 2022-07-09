import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
<<<<<<< Updated upstream
=======
import { FilterCricketPlayerTypePipe } from './filter-cricket-player-type.pipe';
import { HighlightImportantDataDirective } from './highlight-important-data.directive';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
<<<<<<< Updated upstream
    ContentCardComponent
=======
    ContentCardComponent,
    FilterCricketPlayerTypePipe,
    HighlightImportantDataDirective
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
