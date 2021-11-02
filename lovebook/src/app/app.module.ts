import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Sibling3Component } from './sibling3/sibling3.component';
import { GetLivroComponent } from './get-livro/get-livro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Sibling3Component,
    GetLivroComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SidebarModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
