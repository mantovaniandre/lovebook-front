import { Sibling3Component } from './sibling3/sibling3.component';
import { Parent3Component } from './parent3/parent3.component';
import { Parent2Component } from './parent2/parent2.component';
import { ParentComponent } from './parent/parent.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'parent2',
    component: Parent2Component,
  },
  {
    path: 'parent3',
    component: Parent3Component,
  },
  {
    path: 'sibling3',
    component: Sibling3Component
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [

  ],
})
export class AppRoutingModule {}
