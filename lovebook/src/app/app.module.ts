import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LoginComponent } from './login/login.component';
import { AtualizacaoCadastralComponent } from './atualizacao-cadastral/atualizacao-cadastral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
