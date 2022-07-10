import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';





const routes: Routes = [
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
  // {
  //   path: "search",
  //   component: ContentSearchComponent,
  // },
  // {
  //   path: '**',
  //   loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  // }
];

@NgModule({
  declarations: [],
  // this hooks up our routes so they work
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
