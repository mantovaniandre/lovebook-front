import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Sibling3Component } from './sibling3/sibling3.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LoginComponent } from './login/login.component';
import { AtualizacaoCadastralComponent } from './atualizacao-cadastral/atualizacao-cadastral.component';

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
    CadastroLivrosComponent,
    LoginComponent,
    AtualizacaoCadastralComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
