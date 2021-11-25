import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Livro } from './models/Livro';
import { ConnectionApiService } from './services/connection-api.service';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lovebook-frontnew';

  message:any;
  subscription!: Subscription;
  filtroSelecionado!: string;

  constructor(private data: DataService) {

  }

  ngOnInit(){
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  getLivros(livro: string){
    event?.preventDefault();
    this.message = [livro, this.filtroSelecionado];
    this.data.changeMessage(this.message);
  }

  selectFiltro(event: any){
    this.filtroSelecionado = event.target.value;
    console.log(this.filtroSelecionado);
  }


}






