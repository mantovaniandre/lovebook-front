import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from "./cadastro-usuario/cadastro-usuario.component";
import { MinhaContaClienteComponent } from "./minha-conta-cliente/minha-conta-cliente.component";


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
    path:'login',
    component: LoginComponent
  },
  {
    path:'cadastroUsuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'minhaConta',
    component: MinhaContaClienteComponent
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
