import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { KnowMoreComponent } from "./know-more/know-more.component";
import { AuthGuardServiceService } from "./Guards/AuthGuardService.service";
import { MyCommentsComponent } from "./my-comments/my-comments.component";
import { MyShoppingComponent } from "./my-shopping/my-shopping.component";
import { EditCommentComponent } from "./edit-comment/edit-comment.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterBookComponent } from "./register-book/register-book.component";
import { MyAccountComponent } from "./my-account/my-account.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'minhaConta',
    component: MyAccountComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: 'registrarUsuario',
    component: UserRegistrationComponent
  },
  {
    path: 'carrinho',
    component: ShoppingCartComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path: 'editarLivros',
    component: EditBookComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'saibaMais',
    component: KnowMoreComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'meusComentarios',
    component: MyCommentsComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'minhasCompras',
    component: MyShoppingComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'editarComentario',
    component: EditCommentComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardServiceService]
  },
  {
    path:'cadastrarLivros',
    component: RegisterBookComponent,
    canActivate: [AuthGuardServiceService]
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
