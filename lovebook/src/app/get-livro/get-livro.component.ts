import { Content } from './../models/Content';
import { Observable } from 'rxjs';
import { ConnectionApiService } from './../services/connection-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Livro } from '../models/Livro';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-get-livro',
  templateUrl: './get-livro.component.html',
  styleUrls: ['./get-livro.component.css']
})
export class GetLivroComponent implements OnInit {

  data!: Array<any>;

  $livros!: Observable<Array<Livro>>;

  constructor(private service: ConnectionApiService) {
    this.data = new Array<any>();
   }

  @ViewChild('sidebar')
  sidebar!: SidebarComponent;
  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string ='280px';
  public closeOnDocumentClick: boolean = true;
  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
  }
  closeClick(): void {
    this.sidebar.hide();
  };

  toggleClick():void{
    this.sidebar.show();
  }

  slides: any = [[]];
  chunk(arr: string | any[], chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {

  }

  getLivros(livro: string){
    event?.preventDefault();
    this.$livros = this.service.getBooks(livro);
    this.$livros.subscribe(data => {
      console.log(data);
      this.data = data;
      this.slides = this.chunk(this.data, 1);
    })
  }

}
