import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lovebook-frontnew';

  message:any;
  messageUser:any;
  subscription!: Subscription;
  SubscriptionUser!: Subscription;
  filtroSelecionado!: string;

  constructor(private data: DataService, private router: Router) {

  }

  ngOnInit(){
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    this.SubscriptionUser = this.data.currentUser.subscribe(messageUser => this.messageUser = messageUser)
  }

  getLivros(livro: string){
    event?.preventDefault();
    this.message = [livro, this.filtroSelecionado];
    this.data.changeMessage(this.message);
    this.router.navigate(['/home']);
  }

  selectFiltro(event: any){
    this.filtroSelecionado = event.target.value;
  }

  go(destination: string){
    this.router.navigate(['/' + destination]);
  }


}






