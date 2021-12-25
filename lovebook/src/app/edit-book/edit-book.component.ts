import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  subscription!: Subscription;
  message:any;
  filtroSelecionado!: string;
  
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    window.scroll(0,0);
  }

  getLivros(livro: string){
    event?.preventDefault();
    this.message = [livro, this.filtroSelecionado];
    this.data.changeMessage(this.message);
  }

  selectFiltro(event: any){
    this.filtroSelecionado = event.target.value;
  }

  go(destination: string){
    this.router.navigate(['/' + destination]);
    window.scroll(0,0);
  }

}
