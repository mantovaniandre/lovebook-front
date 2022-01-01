import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { MyCommentsComponent } from './my-comments/my-comments.component';
import { MyShoppingComponent } from './my-shopping/my-shopping.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditionBooksComponent } from './edition-books/edition-books.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserRegistrationComponent,
    ShoppingCartComponent,
    EditBookComponent,
    KnowMoreComponent,
    MyCommentsComponent,
    MyShoppingComponent,
    DashboardComponent,
    RegisterBookComponent,
    MyAccountComponent,
    EditionBooksComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatMenuModule,
    FormsModule,
    CookieModule.forRoot(),
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
