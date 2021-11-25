import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { AccountClientComponent } from "./account-client/account-client";
import { AccountEmployeeComponent } from "./account-employee/account-employee.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";


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
    path: 'cliente',
    component: AccountClientComponent
  },
  {
    path: 'colaborador',
    component: AccountEmployeeComponent
  },
  {
    path: 'registrar',
    component: UserRegistrationComponent
  },
  {
    path: 'carrinho',
    component: ShoppingCartComponent
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
