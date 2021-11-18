import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { LoginComponent } from './login/login.component';
import { AtualizacaoCadastralComponent } from './atualizacao-cadastral/atualizacao-cadastral.component';
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

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
    path: 'cadastroLivros',
    component: CadastroLivrosComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'atualizacaoCadastral',
    component: AtualizacaoCadastralComponent
  },
  {
    path:'cadastroUsuario',
    component: CadastroUsuarioComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
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
