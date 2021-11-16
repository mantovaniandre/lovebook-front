import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LoginComponent } from './login/login.component';
import { AtualizacaoCadastralComponent } from './atualizacao-cadastral/atualizacao-cadastral.component';

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
    path: 'cadastroLivro',
    component: CadastroLivrosComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'atualizacaoCadastral',
    component: AtualizacaoCadastralComponent
  }
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
