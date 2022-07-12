import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChangeContentComponent } from './change-content/change-content.component';





const routes: Routes = [
  {
    path: "addContent",
    component: ChangeContentComponent
  },
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full",
  },
  {
    path: "list",
    component: ContentListComponent,
  },
  {
    path: "detail/:id",
    component: ContentDetailComponent
  },
  {
    path: "search",
    component: ContentSearchComponent,
  },
  {
    path: "addContent",
    component: ContentSearchComponent,
  },
  {
    path: "updateContent",
    component: ContentSearchComponent,
  },
  {
    path: "**",
    component: PagenotfoundComponent
  },
];

@NgModule({
  declarations: [],
  // this hooks up our routes so they work
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
