import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionApiService } from '../services/connection-api.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showModalFailure!: boolean;
  credentials = {
    email: "",
    senha: ""
  }
  

  constructor(private router: Router,
              private connection: ConnectionApiService,
              private userService: UserService,
              private cookieService: CookieService,) { }

  ngOnInit(): void {
    this.cookieService.remove('carrinho');
    this.cookieService.remove('livro');
    window.scroll(0,0);
  }

  go(destination: string){
    this.router.navigate(['/' + destination]);
    window.scroll(0,0);
  }

  login(email: string, senha: string){
    event?.preventDefault();
    this.credentials.email = email;
    this.credentials.senha = senha;
    this.connection.login(this.credentials).subscribe(
      resp => {
        this.userService.setToken(resp.token);
        this.router.navigate(['/home']);
      },
      error => {
        this.showModalFailure = true;
        console.log(this.router.url)
      }
    )

  }

}
