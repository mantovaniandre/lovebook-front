import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Livro } from './models/Livro';
import { ConnectionApiService } from './services/connection-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lovebook-frontnew';

  data!: Array<any>;
  $livros!: Observable<Array<Livro>>;

  constructor(private service: ConnectionApiService,
    private router: Router) {
    this.data = new Array<any>();
  }

  slides: any = [[]];
    chunk(arr: string | any[], chunkSize: number) {
      let R = [];
      for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        R.push(arr.slice(i, i + chunkSize));
      }
      return R;
    }

  getLivros(livro: string){
    event?.preventDefault();
    this.$livros = this.service.getBooks(livro, "");
    this.$livros.subscribe(data => {
      console.log(data);
      this.data = data;
      this.slides = this.chunk(this.data, 3);
    })
  }

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


}






