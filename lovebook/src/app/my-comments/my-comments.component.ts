import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/Comentarios';
import { ConnectionApiService } from '../services/connection-api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-comments',
  templateUrl: './my-comments.component.html',
  styleUrls: ['./my-comments.component.css']
})
export class MyCommentsComponent implements OnInit {
  $comentarios!: Observable<any>;
  comentarios!: Comentarios[];
  livro!: any;

  constructor(private service: ConnectionApiService, 
              private router: Router) { }

  ngOnInit(): void {
    

  }
  

  go(destination: string){
    this.router.navigate(['/' + destination]);
  }

}
